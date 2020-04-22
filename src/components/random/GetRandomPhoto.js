import React, { useContext } from "react";
import PexelContext from "../../context/PexelContext";

const GetRandomPhoto = () => {
  const pexelContext = useContext(PexelContext);

  const onSubmit = (e) => {
    e.preventDefault();
    pexelContext.getRandomPhoto();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="submit"
          value="See A Random Photo"
          className="btn btn-primary"
        />
      </form>
    </>
  );
};

export default GetRandomPhoto;
