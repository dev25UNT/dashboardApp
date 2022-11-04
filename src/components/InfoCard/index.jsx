import React from "react";
import { Stack } from "react-bootstrap";
import "./infoCard.css";
// import cardIcon from "../../assets/icons/card1Icon.svg";
import dots from "../../assets/icons/dotsVertical.svg";

const InfoCard = ({ cardIcon, text1, text2, btnClicked }) => {
  return (
    <div className={btnClicked ? "infoCardEmbla" : "infoCardMain"}>
      <div className="infoHead">
        {/* <Stack direction="horizontal" gap={5}> */}
        <img src={cardIcon} />
        <img src={dots} />
      </div>
      {/* </Stack> */}
      <div>
        <p className="days">{text1} </p>
        <p className="dayText">{text2}</p>
      </div>
    </div>
  );
};

export default InfoCard;
