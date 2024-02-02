import axios from "@/_api/axios";

export const getS3UploadLink = async (fileExtension): Promise<any> => {
  try {
    const requestBody = {
      fileExtension: fileExtension,
    };
    const response = await axios.post("/api/s3/generate-upload-url", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default getS3UploadLink;
