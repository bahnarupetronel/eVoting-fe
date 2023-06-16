export const getLocalities = async () => {
  const data = await fetch("http://localhost:5173/api/localities/all");
  const localities = await data.json();

  return localities;
};

export default getLocalities;
