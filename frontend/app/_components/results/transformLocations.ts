const transformLocations = (list) => {
  if (!list)
    return {
      type: "LocationCollection",
      features: [],
    };
  const features = list.map((item) => {
    return {
      type: "Feature",
      properties: {
        county: item.county,
        locality: item.name,
        population: item.population.toString(),
        localityId: item.id,
      },
      geometry: {
        type: "Point",
        coordinates: [item.lng, item.lat],
      },
    };
  });

  return {
    type: "FeatureCollection",
    features: features,
  };
};

export default transformLocations;
