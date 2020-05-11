import React, { useReducer } from "react";
import PexelContext from "./PexelContext";
import PexelReducer from "./PexelReducer";
import {
  SEARCH_PHOTOS,
  SET_ERROR,
  SEARCH_VIDEOS,
  GET_RANDOM_PHOTO,
  SET_LOADING,
} from "./Types";

const PexelState = (props) => {
  const initialState = {
    photos: [],
    videos: [],
    randomPhoto: [],
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(PexelReducer, initialState);
  const avoidCorsProxyUrl = "https://cors-anywhere.herokuapp.com/";

  // Search Photos
  const searchPhotos = async (query) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
    const res = await fetch(avoidCorsProxyUrl + url, {
      method: "GET",
      headers: new Headers({
        Authorization:
          "563492ad6f91700001000001f277b44a880f4359844ddef5ee0188df",
      }),
    });
    const data = await res.json();

    if (data.photos.length) {
      dispatch({
        type: SEARCH_PHOTOS,
        payload: data.photos,
      });
    } else if (!data.photos.length) {
      dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };

  //Search Videos
  const searchVideos = async (query) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

    const url = `https://api.pexels.com/videos/search?query=${query}&per_page=15`;
    const res = await fetch(avoidCorsProxyUrl + url, {
      method: "GET",
      headers: new Headers({
        Authorization:
          "563492ad6f91700001000001f277b44a880f4359844ddef5ee0188df",
      }),
    });
    const data = await res.json();

    if (data.videos.length) {
      dispatch({
        type: SEARCH_VIDEOS,
        payload: data.videos,
      });
    } else if (!data.videos.length) {
      dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };

  const getRandomPhoto = async (query) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

    const randomNumber = Math.floor(Math.random() * 1001);
    const url = `https://api.pexels.com/v1/curated?per_page=1&page=${randomNumber}`;
    const res = await fetch(avoidCorsProxyUrl + url, {
      method: "GET",
      headers: new Headers({
        Authorization:
          "563492ad6f91700001000001f277b44a880f4359844ddef5ee0188df",
      }),
    }).catch((err) => console.error("Error"));
    const data = await res.json();
    dispatch({
      type: GET_RANDOM_PHOTO,
      payload: data.photos[0],
    });
  };

  return (
    <PexelContext.Provider
      value={{
        photos: state.photos,
        videos: state.videos,
        randomPhoto: state.randomPhoto,
        loading: state.loading,
        error: state.error,
        searchPhotos,
        searchVideos,
        getRandomPhoto,
      }}
    >
      {props.children}
    </PexelContext.Provider>
  );
};

export default PexelState;
