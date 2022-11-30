import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withAuth } from "../../contexts";

export class Login extends Component {
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate("Profile");
  };

  render() {
    return (
      <>
      {this.props.isLoggedIn ? (
          <p>
            Вы залогинились{" "}
            <button onClick={this.goToProfile}>
              Профиль
            </button>
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
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);
