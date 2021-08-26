import React, { Component } from "react";
import './App.css';
import { Button, Container,Row,Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import Home from "./Components/Home";
import {BrowserRouter as Router,Route} from "react-router-dom"; 
import Addcourse from "./Components/Addcourse";
import Allcourses from "./Components/Allcourses";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";


function App() {
  const btnHandle = () => {
    toast.success(" Done ");
  };

  return(
    <div>
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md = {4}>
              <Menus/>
            </Col>

            <Col md={8}>
              <Route path = "/" component = {Home} exact/>
              <Route path = "/add-course" component={Addcourse} exact/>
              <Route path="/view-courses" component={Allcourses} exact/>
              <Route path = "/about-us" component = {About}exact/>
              <Route path = "/contact-us" component = {ContactUs}exact/>

            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
