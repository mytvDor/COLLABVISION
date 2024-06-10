import "./BookDemo.css";
import File from "../../../assets/file.mp4";
import Button from "@mui/material/Button";

import FeedbackForm from "./FeedbackForm";

const BookDemo = () => {
  return (
    <div>
      <div className="video-container">
        <video
          src={File}
          className="video"
          width="100%"
          height="100%"
          muted
          autoPlay
          loop
        />
        <div className="overlay-text">
          <h1>Book Your Free Demo</h1>
          <p>
            Get to know Collab Vision Infosolutions! Our product experts will
            guide you through our solution:
          </p>
          <li>Introduction to all product features</li>
          <li>Important features for your business priorities</li>
          <li>Answers to any questions you may have</li>
          <div className="BookNow-btn">
            <Button variant="contained">BOOk Now</Button>
          </div>
        </div>
      </div>

      <div className="GiveFeedback-container">
        <div className="GiveFeedback-Header">
          <h1>Give Us Your Feedback</h1>
          <h2 className="mp">
            We’d love to hear what you thought about our services.
          </h2>
        </div>
        <div className="GiveFeedback-Form"></div>

        <FeedbackForm />
      </div>
    </div>
  );
};

export default BookDemo;
