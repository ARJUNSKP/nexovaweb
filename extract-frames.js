const gifFrames = require('gif-frames');
const fs = require('fs');
const path = require('path');

const gifPath = path.join(__dirname, 'public/Create_a_second_ultra_reali-ezgif.com-video-to-gif-converter (1).gif');
const outDir = path.join(__dirname, 'public/frames');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

gifFrames({ url: gifPath, frames: 'all', outputType: 'jpg', cumulative: true })
  .then(function (frameData) {
    frameData.forEach(function (frame) {
      const frameIndex = frame.frameIndex.toString().padStart(3, '0');
      const writeStream = fs.createWriteStream(path.join(outDir, `frame_${frameIndex}.jpg`));
      frame.getImage().pipe(writeStream);
    });
    console.log(`Successfully extracted ${frameData.length} frames.`);
  })
  .catch(function(err) {
    console.error('Error extracting frames:', err);
  });
