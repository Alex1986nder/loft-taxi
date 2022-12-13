import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import logo_img from "../../../assets/images/logo_1.svg";
import map_img from "../../../assets/images/map.png";
import { regs } from "../../../action";
import { Button } from "../../../ui";
import { Map } from "../../Map";

export class Registration extends Component {
  regs = (event) => {
    event.preventDefault();
    const { email, name, password } = event.target;
    this.props.regs(email.value, name.value, password.value);
  };
  render() {
    return (
      <>
        <div className="Unauthorized">
          <div className="Unauthorized__block" data-name="logo">
            <img src={logo_img} />
          </div>
          <div className="Unauthorized__block" data-name="form">
            <img src={map_img} />
            <div className="AuthForm__container">
              <form onSubmit={this.regs}>
                <h2>Регистрация</h2>
                <label htmlFor="email">Email*</label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  
                />
                <label htmlFor="name">Как вас зовут?*</label>
                <input required type="text" name="name"  />
                <label htmlFor="password">Придумайте пароль*:</label>
                <input
                  required
                  id="password"
                  type="password"
                  name="password"
                  
                />
                <Button className="registr" type="submit">
                  Зарегистрироваться
                </Button>
                <div className="reg">
                  Уже зарегистрированы?
                  <div type="submit">
                    <Link to="/">Войти</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const RegistrationConnect = connect(
  (state) => ({
    logOut: state.auth.logOut,
  }),
  { regs }
)(Registration);
