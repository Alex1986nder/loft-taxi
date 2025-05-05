import React, { useEffect } from "react";
import { LoginWithAuth } from "./components/AuthForm/Login";
import Map  from "./components/Map";
import { ProfileWithAuth } from "./components/Profile";
import { RegistrationConnect } from "./components/AuthForm/Registration";
import PropTypes from "prop-types";
import { PrivateRoute } from "./privateRoute";
import "./App.css";
import { connect, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { logOut, logIn, authenticate } from "./action";
import "./components/Header";
// import { setRoute } from "./action";


export const App = (props) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(props)
  // }, [])
  useEffect(() => {
    // dispatch(setRoute());

    let LS_taxi_data = localStorage.getItem("LS_taxi_data");

    if (LS_taxi_data) {
      let data = JSON.parse(LS_taxi_data);
      props.authenticate(data.email, data.password);
      // console.log(LS_taxi_data);
    }
  }, []);

  return (
    <>
      <main>
        <section>
          <Switch>
            <Route exact path="/loft-taxi" component={LoginWithAuth} />
            <Route path="/registration" component={RegistrationConnect} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={ProfileWithAuth} />
          </Switch>
        </section>
      </main>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }), {
  logOut, logIn, authenticate
})(App);
