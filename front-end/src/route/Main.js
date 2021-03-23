import { Component } from "react";
import Login from "../pages/loginPage";
import Signup from "../pages/signup";
import Home from "../pages/homepage";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Main;
