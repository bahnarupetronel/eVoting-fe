import { userRegister } from "../../../../_interfaces/userRegister.model";

export const registerUser = async (data): Promise<any> => {
  try {
    const response = await fetch("http://localhost:5173/api/user/register", {
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

export default registerUser;
