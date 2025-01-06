import React from "react";
import "./Picture.css";

const Picture = () => {
  return (
    <div className="card">
      <div className="card-title">
        Let <span className="highlight">Storyscape</span> summarize your videos
        like never before,
        <br />
        turning raw footage into story-driven content.
      </div>
      <div className="card-description">
        Storyscape turns raw video footage into engaging, story-driven
        summaries. It intelligently captures key moments, blending visual scenes
        and
        <br />
        dialogue, to create easy-to-consume content. With options for video
        highlights, text summaries, or audio, Storyscape makes content more
        <br />
        accessible and efficient.
      </div>
    </div>
  );
};

export default Picture;
