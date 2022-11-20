import React from "react"
export const Login = () => {
  
  return (
    <form onSubmit={() => {this.navigateTo("Map")}}>
      <div>Войти</div>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" width="355px"/>
      <label htmlFor="password">Пароль:</label>
      <input id="password" type="password" name="password" width="355px" />
      <button type='submit' onClick={() => {this.navigateTo("Map")}} width="353px">Войти</button>
      <div>Новый пользователь?
        <button type='submit' onClick={() => {this.navigateTo("Registration")}}>Зарегистрируйтесь</button>
      </div>
    </form>
  );
};