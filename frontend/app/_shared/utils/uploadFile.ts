export const uploadFile = async (url: string, file: File): Promise<any> => {
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });

    const imageUrl: string = url.split("?")[0];
    return imageUrl;
  } catch (error) {
    return error;
  }
};

export default uploadFile;
