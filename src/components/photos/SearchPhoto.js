import React, { useState, useContext } from "react";
import PexelContext from "../../context/PexelContext";
import Swal from "sweetalert2";

const SearchPhoto = () => {
  const pexelContext = useContext(PexelContext);
  const [photoQuery, setPhotoQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (photoQuery === "") {
      Swal.fire({
        title: "Please enter something to search for 😊",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    } else {
      pexelContext.searchPhotos(photoQuery);
    }
  };

  const handleSearchInput = (e) => {
    setPhotoQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={photoQuery}
          onChange={handleSearchInput}
          className="option-input"
        />
        <br />
        <br />
        <input
          type="submit"
          value="Search Photos"
          className="btn btn-primary"
        />
      </form>
    </>
  );
};

export default SearchPhoto;
