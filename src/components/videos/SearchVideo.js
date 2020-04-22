import React, { useState, useContext } from "react";
import PexelContext from "../../context/PexelContext";
import Swal from "sweetalert2";

const SearchVideo = () => {
  const pexelContext = useContext(PexelContext);
  const [videoQuery, setVideoQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (videoQuery === "") {
      Swal.fire({
        title: "Please enter something to search for 😊",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    } else {
      pexelContext.searchVideos(videoQuery);
    }
  };

  const handleSearchInput = (e) => {
    setVideoQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={videoQuery}
          onChange={handleSearchInput}
          className="option-input"
        />
        <br />
        <br />
        <input
          type="submit"
          value="Search Videos"
          className="btn btn-primary"
        />
      </form>
    </>
  );
};

export default SearchVideo;
