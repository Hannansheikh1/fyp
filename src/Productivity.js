import React from "react";
import "./Productivity.css";
import icon1 from "./first-removebg-preview.png"
import icon2 from "./second-removebg-preview.png"
import icon3 from "./third-removebg-preview.png"
import icon4 from "./fourth-removebg-preview.png"
import icon5 from "./fifth-removebg-preview.png"


const Productivity = () => {
  return (
    <div className="productivity-container">
      <h2 className="productivity-heading">
        A new era of productivity for everyone
      </h2>
      <div className="productivity-grid">
        {/* Card 1 */}
        <div className="productivity-card1">
          <div className="card-icon1">
          <img src={icon1} alt="Example" className="icon1" />
          </div>
          <h3>Content Creators</h3>
          <p>
            Content creators, including YouTubers, podcasters, and
            videographers, can benefit from StoryScape by repurposing their
            video content into written blog posts.
          </p>
        </div>

        {/* Card 2 */}
        <div className="productivity-card1">
          <div className="card-icon1">
          <img src={icon3} alt="Example" className="icon1" />
          </div>
          <h3>Bloggers</h3>
          <p>
            Bloggers can use StoryScape to transform videos into blog posts
            quickly. It's a time-saving solution that helps maintain a
            consistent posting schedule.
          </p>
        </div>

        {/* Card 3 */}
        <div className="productivity-card5">
          <div className="card-icon2">
          <img src={icon4} alt="Example" className="icon1" />

          </div>
          <h3>Anyone Looking to Learn Better</h3>
          <p>
            Anyone who wants to learn better can use StoryScape to convert
            video content into written content that is easier to digest and
            understand.
          </p>
        </div>

        {/* Card 4 */}
        <div className="productivity-card2">
          <div className="card-icon3">
          <img src={icon2} alt="Example" className="icon1" />

          </div>
          <h3>Students</h3>
          <p>
            Students can use StoryScape to convert documentary videos or audio
            lectures into easily digestible written content.
          </p>
        </div>

        {/* Card 5 */}
        <div className="productivity-card2">
          <div className="card-icon3">
          <img src={icon5} alt="Example" className="icon1" />

          </div>
          <h3>Digital Marketers</h3>
          <p>
            Digital marketers can utilize StoryScape to create SEO-friendly
            blog posts that align with their content marketing strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
