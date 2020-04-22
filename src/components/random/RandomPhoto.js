import React, { useContext } from "react";
import PexelContext from "../../context/PexelContext";

const RandomPhoto = () => {
  const pexelContext = useContext(PexelContext);
  const randomPhoto = pexelContext.randomPhoto;

  const { photographer, photographer_url, url, src } = randomPhoto;

  return (
    <>
      {src ? (
        <a href={url} target="blank">
          <img style={randomImageStyle} src={src.large2x} alt="" />
        </a>
      ) : null}

      {photographer ? (
        <p>
          <strong>
            Taken By:&nbsp;
            <a href={photographer_url} target="blank">
              {photographer}
            </a>
          </strong>
        </p>
      ) : null}
    </>
  );
};

const randomImageStyle = {
  borderRadius: "15px",
  width: "85%",
  margin: "15px 15px 15px 15px",
};

export default RandomPhoto;
