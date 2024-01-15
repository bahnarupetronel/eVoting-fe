import axios from "@/_api/axios";

export const deleteElection = async (data: number): Promise<any> => {
  try {
    const response = await axios.delete("/api/election", {
      headers: {
        "content-type": "application/json",
      },
      data,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default deleteElection;
