import React from "react";
import { LoginWithAuth} from "./components/AuthForm";
import { Map } from "./components/Map";
import { ProfileWithAuth} from "./components/Profile";
// import { Registration } from "./Registration";
import PropTypes from "prop-types";
import { PrivateRoute } from "./privateRoute";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
              <Link to="/">Войти</Link>
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

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
