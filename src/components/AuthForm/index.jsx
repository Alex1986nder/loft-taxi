import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { authenticate } from "../../action"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Login extends Component {
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  render() {
    return (
      <>
      {this.props.isLoggedIn ? (
          <p>
            Вы залогинились{" "}
            <Link to="/profile">В Профиль</Link>
          </p>
        ) : (
      <form
        onSubmit={
          this.authenticate
        }
      >
        <div>Войти</div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" width="355px" />
        <label htmlFor="password">Пароль:</label>
        <input id="password" type="password" name="password" width="355px" />
        <button type="submit" width="353px">
          Войти
        </button>
        <div>
          Новый пользователь?
          <button type="submit">Зарегистрируйтесь</button>
        </div>
      </form>
        )}
      </>
      
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
};

export const LoginWithAuth = connect(
  state => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Login);
