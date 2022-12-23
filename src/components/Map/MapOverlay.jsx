import React from "react";
import "./style.css";
import {  useSelector } from "react-redux";
import { coordinatesSelector } from "../../reducers/route";


export const MapOverlay = () => {

  const coordinates = useSelector(coordinatesSelector);

  if (coordinates.length) {
    return (
      <div className="map__message">
        <h1 className="map__message-title">Заказ размещен</h1>
        <p className="map__message-subtitle">
          {" "}
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </p>
        <div className="profile__button">
          <button type="submit" className="btn btn--profile" onChange={() =>{}}>Сделать новый заказ</button>
        </div>
      </div>
    );
  }
};
