import React, { Component, useState,  useEffect } from "react";
import { PropTypes } from "prop-types";
import { authenticate } from "../../../action";
import { connect } from "react-redux";
import { Switch, Link } from "react-router-dom";
import { PrivateRoute } from "../../../privateRoute";
import { Map } from "../../Map";
import {HeaderConnect}  from "../../Header";
import "./styles.css";
import { Button } from "../../../ui";
import logo_img from "../../../assets/images/logo_1.svg";
import map_img from "../../../assets/images/map.png";
import {Redirect} from 'react-router-dom';

export class Login extends Component {
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
    localStorage.setItem(email.value, password.value );
  }

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
           <Redirect to="/map" />
        ) : (
          <>
            <div className="Unauthorized">
              <div className="Unauthorized__block" data-name="logo">
                <img src={logo_img} />
              </div>
              <div className="Unauthorized__block" data-name="form">
                <img src={map_img} />
                <div className="AuthForm__container">
                  <form onSubmit={this.authenticate}>
                    <h2>Войти</h2>
                    <label htmlFor="email">Email</label>
                    <input required id="email" type="email" name="email" />
                    <label htmlFor="password">Пароль:</label>
                    <input required
                      id="password"
                      type="password"
                      name="password"
                      width="355px"
                    />
                    <Button onClick={this.storage}type="submit">Войти</Button>
                  </form>
                  <div className="reg">
                    Новый пользователь?
                    <div type="submit">
                      <Link to="/registration">Зарегистрируйтесь</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
};

export const LoginWithAuth = connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    logOut: state.auth.logOut,
  }),
  { authenticate }
)(Login);
