export const getCounties = async () => {
  const data = await fetch("http://localhost:5173/api/counties/all");
  const counties = await data.json();

  return counties;
};

export default getCounties;
