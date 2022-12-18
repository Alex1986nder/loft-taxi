import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { Button } from "../../ui";
import credit from "../../assets/images/credit_card.png";
import { HeaderConnect } from "../Header";
import { Link } from "react-router-dom";
import { cardDetails } from "../../action";
import { PropTypes } from "prop-types";

export class Profile extends Component {
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
                    <input name="cardName" width="355px" />
                    <label>Номер карты</label>
                    <input name="cardNumber" width="355px" />
                    <div className="card">
                      <div className="card__mm">
                        <label>MM/YY</label>
                        <input name="expiryDate" />
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
