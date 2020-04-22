import React from "react";

const Video = ({ video: { duration, url, image, user, video_files } }) => {
  return (
    <>
      <div className="card">
        {image ? (
          <>
            {url ? (
              <video style={videoStyle} controls>
                <source src={video_files[0].link} type="video/mp4" />
                Your Browser Does Not Support The Video Tag
              </video>
            ) : null}
            <p> {user.name} </p>
          </>
        ) : null}
      </div>
    </>
  );
};

const videoStyle = {
  width: "90%",
  margin: "auto",
  padding: "5px",
  height: "100%",
};

export default Video;
