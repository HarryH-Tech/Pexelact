import React from "react";

const Photo = ({ photo: { url, photographer, photographer_url, src } }) => {
  return (
    <>
      <div className="card" style={cardStyles}>
        {src ? (
          <a href={url} target="blank">
            <img style={imgStyle} src={src.medium} alt="" />
          </a>
        ) : (
          <h1>no photo</h1>
        )}

        {photographer ? (
          <div>
            <a href={photographer_url} target="blank">
              {photographer}
            </a>
          </div>
        ) : (
          <div> Sorry, no photographer available </div>
        )}
      </div>
    </>
  );
};

const imgStyle = {
  width: "100%",
  height: "250px",
  padding: "7px",
  margin: "auto",
  borderRadius: "10px",
};

const cardStyles = {
  textAlign: "center",
};

export default Photo;
