import { Component } from "react";
import "../styles/Signupage.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import loginUrl from "../apicalls/apicall";
import Todolist from "../components/todoList";

// import Logged from "../pages/logged";
class Signup extends Component {
  state = {
    status: "",
  };
  onSubmit = (event) => {
    event.preventDefault();
    fetch(loginUrl + "users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        emailId: event.target.emailId.value,
        userPassword: event.target.userPassword.value,
        confirmPassword: event.target.confirmPassword.value,
      }),
    })
      .then((response) => {
       return response.json();
       
      })
      .then((data) => {
      console.log(data);
      if (data.data) {
        this.setState({ status: "successful" })
      }
      else{
        alert("Failed to SignUp");
      }
        })
      .catch((err) => {
        console.log(err);
      });
  };

  // }
  render() {
    return (
      <div>
        {this.state.status === "successful" ? (
          <Todolist/>
          ) : (
      <div>
        <Navigation />
        <div className="signupbox">
          <h2>Sign Up Page</h2>
          <form className="form-container" onSubmit={this.onSubmit}>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
            />
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Enter your last Name"
              name="lastName"
            />
            <p>Email</p>
            <input type="text" placeholder="Enter your email" name="emailId" />
            <p>Password</p>
            <input type="password" placeholder="Password" name="userPassword" />
            <p>Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
            />
            <button type="submit" className="buttonheight">Signup</button>
            <Link to="/login">
              <input type="button" name="login" value="login" />
            </Link>
            <button type="reset" name="cancel" value="cancel">Clear</button>
          </form>
        </div>
        <Footer />
      </div>
      )}
      </div>
    );
  }
}

export default Signup;
