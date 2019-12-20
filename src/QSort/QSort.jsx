import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import P5Wrapper from 'react-p5-wrapper';
import Button from 'react-p5-wrapper';


export default class QSort extends Component {
  sketch(p){
    let values = [];

let i = 0;
let j = 0;
let w = 50;


p.setup = () => {
  p.createCanvas(900, 600);
  values = new Array(p.width);
  for (let i = 0; i < values.length; i++) {
    values[i] = p.random(p.height);
    //values[i] = noise(i/100.0)*height;
  }
  var button = p.createButton("reset");
  button.mousePressed(resetSketch);
  button.parent("resetQSort");
}

function resetSketch() {
  window.location.reload();
}

p.draw = () => {
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

  render() {

    return (
      <section id="QSort">

        <div className="title4">
  Bubble Sort
</div>

<div className="description4">
  <b>Current position</b> in the array is indicated by the red bar.<br></br>
  <b>Pivot value</b> is indicated by the element immediately to the right of the green shade.<br></br>
  <b>How it works:</b> We scan through the array from left to right.<br></br>
  All values greater than the pivot are swapped with currentPosition(red bar).<br></br>
  All values less than pivot are skipped over.<br></br>
Pivot value is swapped with currentPosition when all green shade values are less than pivot.<br></br>
Subsequently, a new pivot is chosen, indicated by a new red bar appearing.
</div>
<div id="resetQSort"></div>
<P5Wrapper sketch={this.sketch}></P5Wrapper>



</section>
);
  }



}
