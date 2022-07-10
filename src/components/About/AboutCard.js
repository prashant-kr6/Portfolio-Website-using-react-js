import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prashant Kumar </span>
            from <span className="purple"> Punjab, India.</span>
            <br />I am a student of Lovely Professional University pursuing Btech in computer science and education.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "When you have a dream, you've got to grab it and never let go."{" "}
          </p>
          <footer className="blockquote-footer">Prashant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
