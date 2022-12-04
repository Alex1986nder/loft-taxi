import React, { Component } from "react";
import { logIn, logOut } from "../../action"
import { connect } from "react-redux";

export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    
  };

  render() {
    return (
      <p>
        Profile
        <button onClick={this.unauthenticate}>Выйти</button>
      </p>
    );
  }
}

export const ProfileWithAuth = connect(
  null,
  { logIn, logOut }
)
(Profile);


