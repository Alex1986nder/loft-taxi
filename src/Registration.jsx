import React from "react"
import PropTypes from "prop-types";

export const Registration = () => {

  return (
    <form onSubmit>
      <div>Регистрация</div>
      <label htmlFor="email">Email*</label>
      <input id="email" type="email" name="email" width="355px"/>
      <label htmlFor="name">Как вас зовут?*</label>
      <input type="text" name="name" width="355px"/>
      <label htmlFor="password">Придумайте пароль*:</label>
      <input id="password" type="password" name="password" width="355px"/>
      <button type='submit'>Зарегистрироваться</button>
      <div>Уже зарегистрированы?<button>Войти</button></div>
    </form>
  );
}; 

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
};
