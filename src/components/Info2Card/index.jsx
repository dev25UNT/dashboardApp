import React from "react";
import { Button } from "react-bootstrap";
import "./info2Card.css";
import three from "../../assets/icons/dotsVertical.svg";
import book from "../../assets/icons/bookOpen.svg";

const Info2Card = ({
  text1,
  text2,
  text3,
  image,
  image2,
  image3,
  btnClicked,
  date2,
  date1,
}) => {
  return (
    <div className="info2Card">
      <div className="info2Head">
        <img src={image} />
        {btnClicked ? (
          <Button className="btnLeader2">
            <span>
              <img src={image2} />
            </span>
            Day:{text3}
          </Button>
        ) : (
          <img src={three} />
        )}
      </div>
      <div className={btnClicked ? "info2Head2" : "info2Head"}>
        <h3 className="info2Text">
          {text1}:{btnClicked ? "" : <br />}
          {text2}
        </h3>
        <img src={image3} />
        <div className="info2Head">
          <h3 className="date">{date1}</h3>
          <h3 className="date">{date2}</h3>
          {/* <h3>{date2}</h3> */}
        </div>
        {/* <img src={three} /> */}
        {btnClicked ? (
          ""
        ) : (
          <Button className="btnLeader2">
            <span>
              <img src={image2} />
            </span>
            Day:{text3}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Info2Card;
