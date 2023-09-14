export const UploadFile = ({ setFile, file, setFileUrl }) => {
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      console.log(fileUrl);
      setFileUrl(fileUrl);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>
    </div>
  );
};

export default UploadFile;
