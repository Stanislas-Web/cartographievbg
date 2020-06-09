import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaBeer } from "react-icons/fa";
import { AiFillAlert, AiFillMedicineBox,AiOutlineUser,AiFillBank } from "react-icons/ai";
// import * as parkDate from "./skateboard-parks 2.json";
import * as parkDate from "./geoJsonStructure.json";

import { Table } from "react-bootstrap";
export default function Carte2() {
  const [viewport, setViewport] = useState({
    latitude: -4.3217055,
    longitude: 15.3125974,
    width: "100vw",
    height: "60vh",
    zoom: 4,
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
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoiam9uYXRoYW5rYWxhbGEiLCJhIjoiY2thbWx6aHU2MGxpMTJ5cXcwMm5tNXB2cyJ9.KzPHGFlZxVuZcrjqRl7g5g"
        mapStyle="mapbox://styles/mapbox/light-v10"
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
              className="marker-btn "
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              {/* <FaBeer /> */}
              {getIcon(park.properties.NAME_FR)}
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
              {/* <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.NAME_FR}</p>
              <p>{selectedPark.properties.VILLE}</p>
              <p>{selectedPark.properties.PROVINCE}</p>
              <p>{selectedPark.properties.ADDRESS}</p>
              <p>{selectedPark.properties.EMAIL}</p>
              <p>{selectedPark.properties.CONTACT}</p> */}
              <Table striped bordered hover>
                {/* <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <td>Nom : </td>
                    <td className="text-center">
                      {selectedPark.properties.NAME}
                    </td>
                  </tr>
                  <tr>
                    <td>Type : </td>
                    <td>{selectedPark.properties.NAME_FR}</td>
                  </tr>
                  <tr>
                    <td>Adresse : </td>
                    <td>{selectedPark.properties.ADDRESS}</td>
                  </tr>
                  <tr>
                    <td>Tél : </td>
                    <td>{selectedPark.properties.CONTACT}</td>
                  </tr>
                  <tr>
                    <td>E-mail : </td>
                    <td>{selectedPark.properties.EMAIL}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

function getIcon(type) {
  switch (type) {
    case "Hôpitaux":
      return <AiFillMedicineBox/>
      break;
   
    
    case "Police":
      return <AiFillAlert/>
      break;
    case "services aux enfants":
      return <AiOutlineUser/>
      break;

    default:
      return <AiFillBank/>
      break;
  }
}
