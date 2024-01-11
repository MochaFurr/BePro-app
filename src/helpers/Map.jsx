import React, { useEffect } from "react";
import config from "../config";

const Map = () => {
  useEffect(() => {
    // Load the Google Maps JavaScript API script
    const script = document.createElement("script");
    script.src = config.apiKey;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize the map after the script has loaded
    script.onload = () => {
      initMap();
    };

    // Clean up the script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const location = { lat: 50.92407053032193, lng: 3.19669994159028 };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 17,
    });

    new window.google.maps.Marker({
      position: location,
      map: map,
      title: "BePRO Detailing",
    });
  };

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default Map;
