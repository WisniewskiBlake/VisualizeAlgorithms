import React from 'react';
import ReactDOM from 'react-dom';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import HomeScreen from './HomeScreen/HomeScreen';
import NavBar from './NavBar/NavBar';
import P5Wrapper from 'react-p5-wrapper';
import BSort from './BSort/BSort';
import BreadthFirstSearch from './BreadthFirstSearch/BreadthFirstSearch';
import QSort from './QSort/QSort';
import BFSExtra from './BFSExtra/BFSExtra';


function App() {
  return (
    <div className="App">

       <HomeScreen></HomeScreen>
       <NavBar></NavBar>
       <PathfindingVisualizer></PathfindingVisualizer>
       <BFSExtra></BFSExtra>
      <BreadthFirstSearch></BreadthFirstSearch>
      <BSort></BSort>
      <QSort></QSort>


    </div>
  );
}

export default App;
