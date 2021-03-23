import { Component } from "react";
import Navigation from "../components/Navigation";
import "../styles/Home.css";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
      <div className="main-div">
        <h2> Welcome To The Home Page</h2>
        <p className="para">This page is our landing page </p>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Home;
