//ADD MEDIA QUERIES FOR VIDEO/PHOTO COMPONENTS AND FOR BOXES ON MAIN Page

import React from "react";
import "./App.css";
import styled from "styled-components";
import PexelState from "./context/PexelState";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Import Search Related Components
import SearchPhoto from "./components/photos/SearchPhoto";
import SearchedPhotos from "./components/photos/SearchedPhotos";

//Import Video Related Components
import SearchVideo from "./components/videos/SearchVideo";
import SearchedVideos from "./components/videos/SearchedVideos";

//Import Random Photo Related Components
import GetRandomPhoto from "./components/random/GetRandomPhoto";
import RandomPhoto from "./components/random/RandomPhoto";

// Styled Component for OptionContainer on Main Page
const OptionContainer = styled.div`
  border: 3px solid blue;
  border-radius: 12px;
  padding: 20px;
  display: inline-block;
  margin: 35px 10px 0px 10px;
  background-color: #fafafe;
  height: 180px;
`;

const App = () => {
  return (
    <PexelState>
      <Navbar />
      <div className="background">
        <h3 style={{ textAlign: "center" }}>
          Brought to you by&nbsp;
          <a href="https://www.pexels.com/" target="blank">
            Pexels
          </a>
        </h3>
        <br />
        <div className="App">
          <GetRandomPhoto />
          <OptionContainer>
            <SearchPhoto />
          </OptionContainer>

          <OptionContainer>
            <SearchVideo />
          </OptionContainer>

          <SearchedPhotos />
          <SearchedVideos />
          <RandomPhoto />
        </div>
        <Footer />
      </div>
    </PexelState>
  );
};

export default App;
