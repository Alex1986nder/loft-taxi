import React, { Component } from "react";
import { Button } from "./ui";
import "./style.css";
import { useSelector } from "react-redux";

export class ProfileForm extends Component {
  render() {
    return (
      <>
        <div className="ProfileForm">
          <div className="ProfileForm__content">
            <form className="AuthForm">
              <label>Откуда</label>
              <input  name="address1" value=""/>
              <label>Куда</label>
              <input name="address2" value="" />
              <Button type="submit">Вызвать такси</Button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
