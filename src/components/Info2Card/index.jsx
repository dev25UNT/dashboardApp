import React from "react";
import { Button } from "react-bootstrap";
import "./info2Card.css";
import three from "../../assets/icons/dotsVertical.svg";
import book from "../../assets/icons/bookOpen.svg";

const Info2Card = ({ text1, text2, text3, image, image2 }) => {
  return (
    <div className="info2Card">
      <div className="info2Head">
        <img src={image} />
        <img src={three} />
      </div>
      <div className="info2Head">
        <h3 className="info2Text">
          {text1}:
          <br />
          {text2}
        </h3>
        {/* <img src={three} /> */}
        <Button className="btnLeader2">
          <span>
            <img src={image2} />
          </span>
          Day:{text3}
        </Button>
      </div>
    </div>
  );
};

export default Info2Card;
