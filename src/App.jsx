import React from "react";
import { LoginWithAuth } from "./components/AuthForm/Login";
import { Map } from "./components/Map";
import { ProfileWithAuth } from "./components/Profile";
import { Registration } from "./components/AuthForm/Registration";
import PropTypes from "prop-types";
import { PrivateRoute } from "./privateRoute";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { logOut } from "./action";

class App extends React.Component {
 unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };
  
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
              <div onClick={this.unauthenticate}><Link to="/">Выйти</Link></div>
              </li>
              <li>
                <Link to="/map">Карта</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={LoginWithAuth} />
              <Route path="/registration" component={Registration} />
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

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }), { logOut })(App);
