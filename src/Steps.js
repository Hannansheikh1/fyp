import React from "react";
import "./Steps.css";
import exampleImage from "./cards.png"; // Replace with the actual image path
import uploadIcon from "./upload.png";
const Steps = () => {
  return (
    <div>
      <div className="steps">
        <div className="steps-heading">
          Discover How to Repurpose Your Videos with AI-Powered{" "}
          <span className="highlight">Highlights</span> and
          <br />
          <span className="highlight">Context-Aware Summaries</span>
        </div>
      </div>

      <div className="picture1">
        <img src={exampleImage} alt="Example" className="picture1-image" />
      </div>

      {/* Steps Section */}
      <div className="steps-container">
        {/* Step 1 */}
        <div className="step-item">
          <div className="step-text">
            <h3>Step 1: Upload Your Long Video</h3>
            <p>
              Click the "Upload Video" button to select files or drag and drop
              your long video to the AI summarizer generator. Supported formats
              include MP4, MOV, AVI, and more.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-item">
          <div className="step-text">
            <h3>Step 2: Generate Video/Text Summary</h3>
            <p>
              AI automatically generates multiple highlights with tailored
              titles and descriptions. No manual intervention is required. Our
              algorithms work best for talking videos.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-item">
          <div className="step-text">
            <h3>Step 3: Preview and Download</h3>
            <p>
              Easily review the AI-generated video highlights and summaries
              before downloading. Once satisfied, download your custom video,
              text summary, or audio file in just a few clicks!
            </p>
          </div>
        </div>
      </div>
      
      <center>
      <button className="steps-cta">
        <img src={uploadIcon} alt="Upload Icon" className="button-icon" />
        <p>Generate Video Clips Now</p>
      </button>
      </center>

    </div>
  );
};

export default Steps;
