"use client";

import { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { getLocations } from "@/_services/map/getLocations";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFobmFydXBldHJvbmVsIiwiYSI6ImNremZvOHhhbDBzaGEydW55b3BxbXV1b3EifQ.VuJ-_hg8y1_hFGjDztaC-Q";

const RomaniaMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(26.096306);
  const [lat, setLat] = useState(44.439663);
  const [zoom, setZoom] = useState(12);
  const bounds = [
    [20, 42], // Southwest coordinates
    [30, 48], // Northeast coordinates
  ];

  const geojsonData = getLocations();
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/bahnarupetronel/clbdnzqi9002715uogrch3ki4",
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds, // Set the map's geographical boundaries.
    });
    map.current.on("load", () => {
      map.current.addSource("counties", {
        type: "geojson",
        data: geojsonData,
      });

      map.current.addLayer({
        id: "counties-layer",
        type: "circle",
        source: "counties",
        paint: {
          "circle-radius": 8,
          "circle-color": "red",
        },
      });
    });

    map.current.on("click", (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["counties-layer"],
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p><h3>Number of votes:</h3><p>Last updated: 5mins ago</p>`
        )
        .addTo(map.current);

      // Code from the next step will go here.
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [map.current]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
      />
    </div>
  );
};

export default RomaniaMap;
