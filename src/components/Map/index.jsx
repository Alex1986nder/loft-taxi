import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./style.css";
import { HeaderConnect } from "../Header";
import { MapForm } from "./MapForm";
import { drawRoute } from "./MapDrawRoute";
import { useDispatch, useSelector } from "react-redux";
import { removeRoute } from "../../action";
import { setRoute } from "../../action";
import { coordinatesSelector } from "../../reducers/route";
// import { addressesSelector } from "../../reducers/addressList";

export function Map() {
  const [map, setMap] = React.useState(null);
  const mapContainer = useRef(null);

  const coordinates = useSelector(coordinatesSelector);
  const dispatch = useDispatch();

  const reset = (event) => {
    event.preventDefault();
    dispatch(removeRoute());
    
  };
  // useEffect(() => {
  //   dispatch(removeRoute());
  // }, []);
  
  useEffect(() => {
    if (map && coordinates.length) {
      drawRoute(map, coordinates);
      // setMap(map);
    }
    
  }, []);

  console.log(coordinates);


  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibm92YWxpazg2IiwiYSI6ImNsYXp0cWM4MTFjY24zcWxpOHdzaWluZWYifQ.MRFMmRcdwZsIlVmeu5ba4A";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [37.60345458984374, 55.695776911386126],
      zoom: 10,
    });
    setMap(map);

    // return () => {
    //   map.remove();
    // };
  }, []);

  return (
    <>
      <HeaderConnect />
      <div className="map-wrapper">
        <div data-testid="map" className="map-app" ref={mapContainer}></div>
        <MapForm />
      </div>
    </>
  );
}
