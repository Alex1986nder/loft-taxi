import React, { Component, useContext } from "react";
import { withAuth } from "../../contexts";

export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate("Login");
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

export const ProfileWithAuth = withAuth(Profile);


