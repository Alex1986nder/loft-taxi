import React from "react"
import {Login} from "./Login"
import {Profile} from "./Profile"
import {Map} from "./Map"
import {Registration} from "./Registration"

import './App.css';

const PAGES = {
  Map: <Map/>,
  Profile: <Profile/>,
  Login: <Login/>,
  Registration: <Registration/>,

}

class App extends React.Component {

state = {currentPage: "Login"};

navigateTo = (page) => {
  this.setState({currentPage: page });
};

  render() {
    return <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => {this.navigateTo("Map")}}>Карта</button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo("Profile")}}>Профиль</button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo("Login")}}>Выйти</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        {PAGES[this.state.currentPage]}
      </section>
    </main>
    </>;
  }
}

export default App;
