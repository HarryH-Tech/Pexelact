import React, { useContext } from "react";
import PexelContext from "../../context/PexelContext";
import Photo from "./Photo";
import Error from "../Error";

const SearchedPhotos = () => {
  const pexelContext = useContext(PexelContext);
  const { photos, error, loading } = pexelContext;

  return (
    <>
      <div className="media-grid">
        {photos &&
          photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
      </div>
      {error && (
        <>
          <Error
            text={
              "Sorry. We couldn't find anything matching that search suggestion."
            }
          ></Error>
        </>
      )}

      {loading && (
        <>
          <img
            src={
              "https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif"
            }
            alt="Loading Spinner"
          />
        </>
      )}
    </>
  );
};

export default SearchedPhotos;
