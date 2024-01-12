import axios from "@/_api/axios.js";

export const isLoggedIn = async () => {
  try {
    const response = await axios.get("/user/is-logged-in");
    return response;
  } catch (error) {
    return error;
  }
};

export const isUserStillLoggedIn = async () => {
  const response = await isLoggedIn();

  if (response.status === 200) {
    console.log("logged in");
    return true;
  }
  console.log("not logged in");
  return false;
};

export default isUserStillLoggedIn;
