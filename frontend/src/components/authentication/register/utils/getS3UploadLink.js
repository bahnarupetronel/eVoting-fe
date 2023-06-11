export const getS3UploadLink = async (fileExtension) => {
  try {
    const requestBody = {
      fileExtension: fileExtension,
    };

    const response = await fetch(
      "http://localhost:5173/api/s3/generate-upload-url",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const result = await response;
    return result;
  } catch (error) {
    return error;
  }
};

export default getS3UploadLink;
