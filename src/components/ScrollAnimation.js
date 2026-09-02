"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  
  const frameCount = 70;
  
  const preloadImages = () => {
    const loadedImages = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const index = i.toString().padStart(3, '0');
      img.src = `/frames/frame_${index}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  };

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    
    const context = canvas.getContext("2d");
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      
      renderFrame(0);
    };

    const renderFrame = (index) => {
      if (!images[index] || !images[index].complete) return;
      const img = images[index];
      
      // Calculate how to draw the image to cover the canvas (like object-fit: cover)
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;  

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.width, img.height,
                        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);  
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    // Draw first frame when images are loaded
    images[0].onload = () => renderFrame(0);
    
    const handleScroll = () => {
      const html = document.documentElement;
      
      // We calculate the progress based on the scroll position and the container height
      // The parent element should be tall to allow scrolling
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      
      // Ensure frame index is between 0 and frameCount - 1
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );
      
      requestAnimationFrame(() => renderFrame(frameIndex));
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images]);

  return (
    <div className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-black flex justify-center items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
