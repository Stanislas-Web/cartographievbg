import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaBeer } from "react-icons/fa";
import * as parkDate from "./skateboard-parks.json";

export default function Carte1() {
  const [viewport, setViewport] = useState({
    latitude: -4.3217055,
    longitude: 15.3125974, 
    width: "100vw",
    height: "60vh",
    zoom: 3.5,
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="card">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoiam9uYXRoYW5rYWxhbGEiLCJhIjoiY2thbWx6aHU2MGxpMTJ5cXcwMm5tNXB2cyJ9.KzPHGFlZxVuZcrjqRl7g5g"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {parkDate.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <FaBeer />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>Province : {selectedPark.properties.PROVINCE}</h2>
              <p>
                Nombre des structures : {selectedPark.properties.NOMBRE_STR}
              </p>
              <p>Nombre des cas : {selectedPark.properties.NOMBRE_CAS}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
