export const loginUser = async (data) => {
  try {
    const response = await fetch("http://localhost:5173/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response;
    return result;
  } catch (error) {
    return error;
  }
};

export default loginUser;
