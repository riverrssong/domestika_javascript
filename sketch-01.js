const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {

    context.font = "30px CornflowerBlue";
    var gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    context.fillStyle = 'AntiqueWhite';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    context.strokeStyle = gradient;

        const w   = width   * 0.10;
        const h   = height  * 0.10;
        const gap = width   * 0.03;
        const ix  = width   * 0.17;
        const iy  = height  * 0.17;
        const iz  = height  * 0.10;
        const off = width   * 0.02;

        let x, y, z;

      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) { 
          x = ix + (w + gap) * i;
          y = iy + (h + gap) * j;
          z = iz + (z + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
          }
        }
      }
  };
};

canvasSketch(sketch, settings);
