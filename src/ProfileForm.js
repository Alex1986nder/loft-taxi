import React, { Component } from "react";
import { Button } from "./ui";
import "./style.css";
import { useSelector } from "react-redux";
import { Autocomplete, TextField} from '@material-ui/core';
import { serverAdressList } from "./api";
export class ProfileForm extends Component {
  render() {
    return (
      <>
        {/* <div className="ProfileForm">
          <div className="ProfileForm__content">
            <form className="AuthForm">
              <label>Откуда</label>
              <input  name="address1" value=""/>
              <label>Куда</label>
              <input name="address2" value="" />
              <Button type="submit">Вызвать такси</Button>
            </form>
          </div>
        </div> */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={serverAdressList}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </>
    );
  }
}
