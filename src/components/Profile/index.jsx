import React, { Component } from "react";
import { logIn, logOut } from "../../action";
import { connect } from "react-redux";
import "./styles.css";
import { Button } from "../../ui";
import credit from "../../assets/images/credit_card.png";

export class Profile extends Component {
  // unauthenticate = (event) => {
  //   event.preventDefault();
  //   this.props.logOut();
  // };

  render() {
    return (
      <>
      <div className="AuthForm">
        <div className="AuthForm__container">
          <form>
            <h2>Профиль</h2>
            <p className="text">Введите платежные данные</p>
            <label>Имя владельца</label>
            <input name="name" width="355px" />
            <label>Номер карты</label>
            <input name="number" width="355px" />
            <div className="card">
              <div className="card__mm">
                <label>MM/YY</label>
                <input name="mmyy" />
              </div>
              <div className="card__mm">
                <label>CVC</label>
                <input name="cvc" />
              </div>
            </div>
            <Button type="submit" width="353px">
              Сохранить
            </Button>
          </form>
        </div>
        <div className="credit_card">
          <img src={credit} />
        </div>
      </div>

        {/* <p>
          Profile
          <button onClick={this.unauthenticate}>Выйти</button>
        </p> */}
      </>
    );
  }
}

export const ProfileWithAuth = connect(null, { logIn, logOut })(Profile);
