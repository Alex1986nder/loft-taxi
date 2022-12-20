import React, { Component, useState } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { Button } from "../../ui";
import credit from "../../assets/images/credit_card.png";
import { HeaderConnect } from "../Header";
import { Link } from "react-router-dom";
import { cardDetails } from "../../action";
import { PropTypes } from "prop-types";

const cvc = (e) => {
  const { value } = e.target;
  if (!value) {
    e.target.value = "";
  }
  e.target.value = value.replace(/\D/g, "").substring(0, 3);
};

export class Profile extends Component {
  state = {
    cardNumber: "0123 4567 8910 1112",
    cardName: "Имя владельца",
    expiryDate: "01/10",
  };

  sendNumber = (e) => {
    const { value } = e.target;
    const match =
    value
      .replace(/\D/g, "")
      .substring(0, 16)
      .match(/.{1,4}/g) || [];
  e.target.value = match.join(" ");
    this.setState({
      cardNumber: e.target.value,
    });
  };
  sendExpiryDate = (e) => {
    const { value } = e.target;
    const match =
    value
      .replace(/\D/g, "")
      .substring(0, 4)
      .match(/.{1,2}/g) || [];
  e.target.value = match.join("/");
    
    this.setState({
      expiryDate: e.target.value,
    });
  };
  sendName = (e) => {
    const { value } = e.target;
    e.target.value = value.replace(/\d/g, "").toUpperCase();
    this.setState({
      cardName: e.target.value,
    });
  };

  cardDetails = (e) => {
    e.preventDefault();
    const { cardNumber, expiryDate, cardName, cvc } = e.target;
    this.props.cardDetails(
      cardNumber.value,
      expiryDate.value,
      cardName.value,
      cvc.value
    );
  };

  render() {
    return (
      <>
        {this.props.isSubmitted ? (
          <div className="wrapper">
            <HeaderConnect />
            <section className="profile-section">
              <div className="profile-section__wrapper">
                <div className="profile-wrapper"></div>
                <div data-testid="profile" className="profile">
                  <h1 className="profile__title">Профиль</h1>
                  <p className="profile__subtitle">
                    Платёжные данные обновлены. Теперь вы можете заказывать
                    такси.
                  </p>
                  <div className="profile__button">
                    <button className="btn btn--profile">
                      <Link to="/map">Перейти на карту</Link>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <>
            <HeaderConnect />
            <div className="wrapper">
              <div className="AuthForm">
                <div className="AuthForm__container">
                  <form onSubmit={this.cardDetails}>
                    <h2>Профиль</h2>
                    <p className="text">Введите платежные данные</p>
                    <label>Имя владельца</label>
                    <input name="cardName" width="355px" onChange={this.sendName} />
                    <label>Номер карты</label>
                    <input
                      name="cardNumber"
                      width="355px"
                      onChange={this.sendNumber}
                    />
                    <div className="card">
                      <div className="card__mm">
                        <label>MM/YY</label>
                        <input
                          name="expiryDate"
                          onChange={this.sendExpiryDate}
                        />
                      </div>
                      <div className="card__mm">
                        <label>CVC</label>
                        <input name="cvc" onChange={cvc} />
                      </div>
                    </div>

                    <Button type="submit" width="353px">
                      Сохранить
                    </Button>
                  </form>
                </div>
                <div className="AuthForm__container">
                  <div className="profile__card">
                    <div>{this.state.cardName}</div>
                    <div className="card__row">{this.state.expiryDate}</div>
                    <div className="card__row">{this.state.cardNumber}</div>
                    <div className="card__row">
                      <div className="circle"></div>
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

Profile.propTypes = {
  isSubmitted: PropTypes.bool,
};

export const ProfileWithAuth = connect(
  (state) => ({ isSubmitted: state.payment.isSubmitted }),
  { cardDetails }
)(Profile);
