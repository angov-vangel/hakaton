import React, { useState } from "react";

export const LogoPlaceholder = () => {
  const [imageUrl, setImageUrl] = useState("");

  const style: React.CSSProperties = {
    display: "inline-block",
    border: "2px dashed #ccc",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    height: "150px",
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="w-3/4 mx-auto">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="selected image"
          width={250}
          height={250}
          className="object-fit"
        />
      ) : (
        <label htmlFor="file-upload" style={style}>
          <i className="fa fa-cloud-upload"></i> Click here to upload a file
        </label>
      )}
      <input
        className="hidden"
        id="file-upload"
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};
