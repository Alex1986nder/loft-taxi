import React from "react";
import { LoginWithAuth } from "./components/AuthForm/Login";
import { Map } from "./components/Map";
import { ProfileWithAuth } from "./components/Profile";
import { RegistrationConnect } from "./components/AuthForm/Registration";
import PropTypes from "prop-types";
import { PrivateRoute } from "./privateRoute";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { logOut } from "./action";
import logo_img from "./assets/images/logo.svg";
import "./components/Header";

class App extends React.Component {

  unauthenticate = (event) => {
    event.preventDefault();
  this.props.logOut()
  };
  render() {
    
    return (
      <>
      {/* <header className="Header">
          <div className="Header__logo">
            <img src={logo_img} />
          </div>
          <nav>
            <ul className="Header__navList">
              <li className="Header__navItem">
                <div onClick={this.unauthenticate}>
                  <Link to="/">Выйти</Link>
                </div>
              </li>
              <li className="Header__navItem">
                <Link to="/map">Карта</Link>
              </li>
              <li className="Header__navItem">
                <Link to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={LoginWithAuth} />
              <Route path="/registration" component={RegistrationConnect} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithAuth} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }), {
  logOut
})(App);
