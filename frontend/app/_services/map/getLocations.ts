export const getLocations = () => {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          title: "countyName",
          description: "",
          population: "",
        },
        geometry: {
          type: "Point",
          coordinates: [23.589459, 46.073887],
        },
      },
    ],
  };
};

export default getLocations;
