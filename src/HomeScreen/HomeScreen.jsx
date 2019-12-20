import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import {
//   Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
// } from 'reactstrap';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

  }


render() {
    return (
      <section id="cover">
          <div class="container">
              <div class="row">
                  <div class="col-sm-3">
                     <p class="lead wall-sticker">
                         the
                       algorithm
                     visualizer
                     </p>
                  </div>
                  <div class="col-sm-9">
                      <h1 class="moto">Take part in the <span class="bold-green"><br></br>interactive</span> experience.

                     </h1>
                      <a href="#section-cards"><i class="fa fa-arrow-down"></i></a>
                  </div>
              </div>
          </div>
     </section>
    );

  }

}
