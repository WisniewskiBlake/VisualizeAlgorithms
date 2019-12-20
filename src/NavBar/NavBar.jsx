import React, { Component } from "react";
import ReactDOM from 'react-dom';


export default class NavBar extends Component {


  // hideFixedMenu = () => this.setState({ fixed: false });
  // showFixedMenu = () => this.setState({ fixed: true });

  render() {
    // const { fixed } = this.state;
    // const { onVisiualizePressed, onClearPathPressed } = this.props;
    return (
      <div>
        <nav class="navbar navbar-expand-sm  bg-custom-blue">
            <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">&#9776;</button>

            <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
                <a class="navbar-brand" href="#cover">ALGORITHMS</a>

                <br>
                </br>

                <ul class="nav navbar-nav">
                  <li class="nav-item nav-custom-item">
                      <a class="nav-link" href="#cover">Home</a>
                  </li>
                            <li class="nav-item nav-custom-item">
                                <a class="nav-link" href="#dijkstraTitle">Dijkstra's Algorithm</a>
                            </li>
                            <li class="nav-item nav-custom-item">
                                 <a class="nav-link" href="#BFS">BFS</a>
                            </li>
                            <li class="nav-item nav-custom-item">
                                 <a class="nav-link" href="#BSort">Quicksort</a>
                            </li>
                            <li class="nav-item nav-custom-item">
                                 <a class="nav-link" href="#QSort">Bubble Sort</a>
                            </li>

                        </ul>
            </div>
        </nav>

      </div>
    );
  }
}



// <Menu className="navBarMenu" inverted style={{ backgroundColor: "#061830" }}>
//   <Container>
//     <Menu.Item as="a" header>
//       <Image
//         size="mini"
//         src={require("../assets/path-algo-icon.png")}
//         style={{ marginRight: "1.5em" }}
//       />
//       Algorithm Visualizer
//     </Menu.Item>
//     <Menu.Item as="a">Dijkstra's Algorithm</Menu.Item>
//     <Menu.Item as="a">Breadth First Search</Menu.Item>
//     <Menu.Item as="a">Quicksort</Menu.Item>
//     <Menu.Item as="a">Bubble Sort</Menu.Item>
//
//
//     <Menu.Item position="right">
//
//     </Menu.Item>
//   </Container>
// </Menu>


// <nav class="navbar navbar-expand-sm bg-custom-blue">
//     <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expaded="false" aria-label="Toggle navigation">&#9776;</button>
//
//     <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
//         <a class="navbar-brand text-custom" href="#cover">
//
//           Algorithms
//           </a>
//
//         <br>
//         </br>
//
//         <ul class="nav navbar-nav">
//             <li class="nav-item nav-custom-item">
//                 <a class="nav-link" href="#cover">Dijkstra's Algorithm</a>
//             </li>
//             <li class="nav-item nav-custom-item">
//                  <a class="nav-link" href="#features">BFS</a>
//             </li>
//             <li class="nav-item nav-custom-item">
//                  <a class="nav-link" href="#timeline">Quicksort</a>
//             </li>
//             <li class="nav-item nav-custom-item">
//                  <a class="nav-link" href="#section-cards">Bubble Sort</a>
//             </li>
//
//         </ul>
//     </div>
// </nav>
