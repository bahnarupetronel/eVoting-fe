export const uploadFile = async (url, file) => {
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });

    const imageUrl = url.split("?")[0];
    return imageUrl;
  } catch (error) {
    return error;
  }
};

export default uploadFile;
