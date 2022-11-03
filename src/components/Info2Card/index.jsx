import React from "react";
import { Button } from "react-bootstrap";
import "./info2Card.css";
import three from "../../assets/icons/dotsVertical.svg";
import book from "../../assets/icons/bookOpen.svg";

const Info2Card = () => {
  return (
    <div className="info2Card">
      <div className="info2Head">
        <img src={book} />
        <img src={three} />
      </div>
      <div className="info2Head">
        <h3 className="info2Text">
          English:
          <br />
          Level 1
        </h3>
        {/* <img src={three} /> */}
        <Button className="btnLeader2">Day:18/60</Button>
      </div>
    </div>
  );
};

export default Info2Card;
