import React from "react";
import { Stack } from "react-bootstrap";
import "./infoCard.css";
import cardIcon from "../../assets/icons/card1Icon.svg";
import dots from "../../assets/icons/dotsVertical.svg";

const InfoCard = () => {
  return (
    <div className="infoCardMain">
      <div className="infoHead">
        {/* <Stack direction="horizontal" gap={5}> */}
        <img src={cardIcon} />
        <img src={dots} />
      </div>
      {/* </Stack> */}
      <div>
        <p className="days">24 </p>
        <p className="dayText">Days in training</p>
      </div>
    </div>
  );
};

export default InfoCard;
