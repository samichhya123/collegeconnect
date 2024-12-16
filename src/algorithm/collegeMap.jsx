import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

const CollegeMap = ({ colleges }) => {
  const [mapCenter, setMapCenter] = useState([28.704060, 77.102493]); // Default to Kathmandu
  const [zoomLevel, setZoomLevel] = useState(12); // Zoom level

  // Set map center based on the first college's location (if provided)
  useEffect(() => {
    if (colleges.length > 0) {
      const firstCollege = colleges[0];
      setMapCenter([parseFloat(firstCollege.latitude), parseFloat(firstCollege.longitude)]);
    }
  }, [colleges]);

  return (
    <div style={{ height: "500px" }}>
      <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: "100%", width: "100%" }}>
        {/* TileLayer for map tiles (using OpenStreetMap here) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers for colleges */}
        {colleges.map((college) => (
          <Marker
            key={college.id}
            position={[parseFloat(college.latitude), parseFloat(college.longitude)]}
          >
            <Popup>
              <strong>{college.name}</strong><br />
              {college.address}<br />
              Distance: {college.distance.toFixed(2)} km
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CollegeMap;
