"use client";

import { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

import styles from "./map.module.css";
import { useGetNumberOfVotes } from "@/_hooks/vote";
import { VotesRequestModel } from "@/_interfaces/votesRequest.model";
import ResultsModal from "./ResultsModal";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFobmFydXBldHJvbmVsIiwiYSI6ImNremZvOHhhbDBzaGEydW55b3BxbXV1b3EifQ.VuJ-_hg8y1_hFGjDztaC-Q";
const minZoomToShowLocations = 10;
const RomaniaMap = ({
  locations,
  type,
  candidateTypeId,
  election,
}: {
  locations;
  type: string;
  candidateTypeId;
  election;
}) => {
  const [enabled, setEnabled] = useState(false);
  const [votesRequest, setVotesRequest] = useState<VotesRequestModel>();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(26.096306);
  const [lat, setLat] = useState(44.439663);
  const [zoom, setZoom] = useState(12);
  const [votes, setVotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bounds = [
    [20, 42], // Southwest coordinates
    [30, 48], // Northeast coordinates
  ];

  const { isSuccess, isError, isLoading, data } = useGetNumberOfVotes(
    votesRequest,
    enabled
  );

  useEffect(() => {
    if (isSuccess) {
      setVotes(data?.data);
    }
  }, [isSuccess]);

  const sourceExists = (map, sourceId) => {
    return map.current.getSource(sourceId) !== undefined;
  };
  const layerExists = (map, layerId) => {
    return map.current.getLayer(layerId) !== undefined;
  };

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/bahnarupetronel/clbdnzqi9002715uogrch3ki4",
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds,
    });
    if (type === "county")
      map.current.on("load", () => {
        map.current.addSource("locations", {
          type: "geojson",
          data: locations,
        });

        map.current.addLayer({
          id: "locations-layer",
          type: "circle",
          source: "locations",
          paint: {
            "circle-radius": 8,
            "circle-color": "red",
          },
        });
      });

    if (type === "locality")
      map.current.on("zoom", () => {
        var zoom = map.current.getZoom();
        const existsLocalititesLayer = sourceExists(map, "locations");
        const existsPointsLayer = layerExists(map, "locations-layer");
        if (zoom >= minZoomToShowLocations) {
          if (!existsLocalititesLayer)
            map.current.addSource("locations", {
              type: "geojson",
              data: locations,
            });

          if (!existsPointsLayer)
            map.current.addLayer({
              id: "locations-layer",
              type: "circle",
              source: "locations",
              paint: {
                "circle-radius": 8,
                "circle-color": "red",
              },
            });
        } else {
          if (existsPointsLayer) {
            map.current.removeLayer("locations-layer");
          }
          if (existsLocalititesLayer) {
            map.current.removeSource("locations");
          }
        }
      });

    map.current.on("click", (event) => {
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["locations-layer"],
      });
      if (!features.length) {
        setEnabled(false);
        return;
      }
      const feature = features[0];
      setVotesRequest({
        electionId: election.electionId,
        candidateTypeId: candidateTypeId,
        localityId: feature.properties.localityId,
      });
      setEnabled(true);
      setIsModalOpen(true);
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [map.current]);

  return (
    <div
      ref={mapContainer}
      className={styles["map-container"]}
    >
      <ResultsModal
        type={type}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        votes={data?.data}
        election={election}
      />
    </div>
  );
};

export default RomaniaMap;
