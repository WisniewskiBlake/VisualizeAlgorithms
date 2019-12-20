import P5Wrapper from 'react-p5-wrapper';
import button from 'react-p5-wrapper';

export default function sketchQuick(p){
  let values = [];

  let i = 0;
  let j = 0;

  function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    values = new Array(p.width);
    for (let i = 0; i < values.length; i++) {
      values[i] = p.random(p.height);
      //values[i] = noise(i/100.0)*height;
    }
  }

  function draw() {
    p.background(0);

    if (i < values.length) {
      for (let j = 0; j < values.length - i - 1; j++) {
        let a = values[j];
        let b = values[j + 1];
        if (a > b) {
          swap(values, j, j + 1);
        }
      }
    } else {
      console.log("finished");
      p.noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
      p.stroke(255);
      p.line(i, p.height, i, p.height - values[i]);
    }
  }

  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}
