import React from "react";
import styled from "styled-components";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaFileAlt,
} from "react-icons/fa";

const SocialCard = () => {

    const handleGmailClick = () => {
      const email = "anubhab.techie@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
      });
      window.open(`mailto:${email}`);
    };
  return (
    <StyledWrapper>
      <div className="cards">
        <div
          className="card linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/anubhab-nayak-b84b35112/")
          }
        >
          <FaLinkedin size={40} />
          <p className="tip">LinkedIn</p>
        </div>
        <div
          className="card github"
          onClick={() => window.open("https://github.com/mrb1nary")}
        >
          <FaGithub size={40} />
          <p className="tip">Github</p>
        </div>
        <div
          className="card gmail"
          onClick={() => handleGmailClick()}
        >
          <FaEnvelope size={40} />
          <p className="tip">GMail</p>
        </div>
        <div
          className="card twitter"
          onClick={() => window.open("https://x.com/SolDadddyy")}
        >
          <FaTwitter size={40} />
          <p className="tip">X/Twitter</p>
        </div>
        <div
          className="card resume"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1RNRszFJEV3fqmPG9SImk3GVChR-skrvM/view?usp=drive_link"
            )
          }
        >
          <FaFileAlt size={40} />
          <p className="tip">Resume</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cards .github {
    background-color: #333333;
  }

  .cards .linkedin {
    background-color: #0a66c2;
  }

  .cards .gmail {
    background-color: #c71610;
  }
  .cards .twitter {
    background-color: #33ccff;
  }

  .cards .resume {
    background-color: #68a063;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100px;
    width: 350px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    border: 2px solid white;
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;

export default SocialCard;
