import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import logo_img from "../../../assets/images/logo_1.svg";
import map_img from "../../../assets/images/map.png";

import { Button } from "../../../ui";

export class Registration extends Component {
  // const reg = events
  render() {
    return (
      <div className="Unauthorized">
        <div className="Unauthorized__block" data-name="logo">
          <img src={logo_img} />
        </div>
        <div className="Unauthorized__block" data-name="form">
          <img src={map_img} />
          <div className="AuthForm__container">
            <form>
              <h2>Регистрация</h2>
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" name="email" width="355px" />
              <label htmlFor="name">Как вас зовут?*</label>
              <input type="text" name="name" width="355px" />
              <label htmlFor="password">Придумайте пароль*:</label>
              <input
                id="password"
                type="password"
                name="password"
                width="355px"
              />
              <Button type="submit">Зарегистрироваться</Button>
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
    );
  }
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(Registration);
