import React from "react";
import "./RepurposeWays.css";
import pic1 from "./pic1.png"
import pic2 from "./pic2.png"
import pic3 from "./pic3.png"
import uploadIcon from "./upload.png";

const RepurposeWays = () => {
  return (
    <div className="repurpose-container">
      <h2 className="repurpose-heading">
        Discover the <span className="highlight">3 Powerful ways</span> Storyscape <span className="highlight">Repurposes</span> your videos
      </h2>
      <div className="repurpose-section">
        {/* Section 1 */}
        <div className="repurpose-item">
          <div className="repurpose-image">
          <img src={pic1} alt="Example" className="pic1" />
          </div>
          <div className="repurpose-content">
            <h3>Transform Your Content to Highlights</h3>
            <p>
              Storyscape effortlessly reduces long recordings into engaging highlights, capturing key moments and exciting scenes. Whether it's a sports match or a news segment, our AI creates concise summaries that save your audience hours of tedious footage.
              <button className="repurpose-button">
              <img src={uploadIcon} alt="Upload Icon" className="buts" />

                Create Highlight Video Clips</button>
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="repurpose-item reverse">
          <div className="repurpose-image">
          <img src={pic2} alt="Example" className="pic2" />
          </div>
          <div className="repurpose-content">
            <h3>Convert Your Videos to Textual Summaries</h3>
            <p>
              Storyscape turns your videos into concise text summaries, highlighting essential information and key moments. Easily read through the highlights at your own pace, making it simple to grasp the core content without watching the entire video.
              <button className="repurpose-button blue">
              <img src={uploadIcon} alt="Upload Icon" className="buts" />
                Create Video to Text Summary</button>
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="repurpose-item">
          <div className="repurpose-image">
          <img src={pic3} alt="Example" className="pic3" />
          </div>
          <div className="repurpose-content">
            <h3>Convert Summarized Text to Speech</h3>
            <p>
              With Storyscape, you can transform your summarized text into high-quality speech, allowing you to listen to key points on the go. Our AI-generated audio output is perfect for multitasking or online learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepurposeWays;
