import React, { useContext } from "react";
import PexelContext from "../../context/PexelContext";
import Photo from "./Photo";
import Error from "../Error";
import { spinner } from "../../spinner.gif";

const SearchedPhotos = () => {
  const pexelContext = useContext(PexelContext);
  const { photos, error, loading } = pexelContext;

  console.log(pexelContext);

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
          <img src={spinner} alt="Loading Spinner" />
          HI
        </>
      )}
    </>
  );
};

export default SearchedPhotos;
