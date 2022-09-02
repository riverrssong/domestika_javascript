const canvasSketch = require('canvas-sketch');
const { color } = require('canvas-sketch-util');
const math = require('canvas-sketch-util/math');
const { range } = require('canvas-sketch-util/random');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees  / 180 * Math.PI;
}
const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};
 

function sketch() {
      return ({ context, width, height }) => {

      const cx = width * 0.5;
      const cy = height * 0.5;
      const w = width * 0.01;
      const h = height * 0.1; 

      context.font = "30px CornflowerBlue";
      var gradient = context.createLinearGradient(0, 0, cx, cy);
      gradient.addColorStop("0", "red");
      gradient.addColorStop("0.1", "blue");
      gradient.addColorStop("0.2", "purple");

      let x, y;       
      const num = 20;
      const radius = width * 0.3;
      
      for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);
      
      context.save();
      context.translate(x, y);
      context.translate(cx, cy);
      context.rotate(-angle);
      //context.fillStyle= 'teaf';
      context.scale((random.range(0.1, 2), 1), random.range(0.2, 0.5));
      
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();
      
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      
      context.lineWidth = random.range(5, 20)
      
      context.beginPath();
      context.arc(0, 0, radius  * random.range(0.7, 1.3), slice * random.range(1, -5), slice * random.range(0, 0.5), slice * random.range(0, 5))
      context.strokeStyle = gradient;
      context.stroke();
      context.restore();
    }
  }
}

canvasSketch(sketch, settings);
