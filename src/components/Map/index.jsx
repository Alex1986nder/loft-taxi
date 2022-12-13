import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./style.css";
import { HeaderConnect } from "../Header";


export function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibm92YWxpazg2IiwiYSI6ImNsYXp0cWM4MTFjY24zcWxpOHdzaWluZWYifQ.MRFMmRcdwZsIlVmeu5ba4A";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [37.60345458984374, 55.695776911386126],
      zoom: 10
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
        <HeaderConnect />

      <div className="map-wrapper">
        <div data-testid="map" className="map-app" ref={mapContainer}></div>
      </div>
    </>
  );
};

