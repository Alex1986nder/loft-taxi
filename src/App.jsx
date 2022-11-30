import React from "react";
import { Map } from "./components/Map";
import { Registration } from "./Registration";
import { withAuth } from "./contexts";
import PropTypes from "prop-types";
import { LoginWithAuth } from "./components/AuthForm";
import { ProfileWithAuth } from "./components/Profile";
import "./App.css";

class App extends React.Component {
  state = { currentPage: "Login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "Login" });
    }
  };

  pages = {
    Map: (props) => <Map {...props} />,
    Profile: (props) => <ProfileWithAuth {...props} />,
    Login: (props) => <LoginWithAuth {...props} />,
    Registration: (props) => <Registration {...props} />,
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("Map");
                  }}
                >
                  Карта
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("Profile");
                  }}
                >
                  Профиль
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("Login");
                  }}
                >
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {this.pages[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default withAuth(App);
