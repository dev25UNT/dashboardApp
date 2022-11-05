import React from "react";
import { Button } from "react-bootstrap";
import "./activityCard.css";
import chiron from "../../assets/icons/chironDown.svg";
import "../LeadersCard/leaderCard.css";
import Union from "../../assets/icons/Union.svg";
import Union1 from "../../assets/icons/Union1.svg";
import Union2 from "../../assets/icons/Union2.svg";
import Union3 from "../../assets/icons/Union3.svg";
import Union4 from "../../assets/icons/Union4.svg";
import Union5 from "../../assets/icons/Union5.svg";
import Union6 from "../../assets/icons/Union6.svg";
import HourBox from "../HourBox/HourBox";

const activityData = [
  { image: Union, text: "M" },
  { image: Union1, text: "T" },
  { image: Union2, text: "W" },
  { image: Union3, text: "T" },
  { image: Union4, text: "F" },
  { image: Union5, text: "S" },
  { image: Union6, text: "S" },
];

const ActivityCard = ({ btnClicked }) => {
  return (
    <div className={btnClicked ? "activityCardOpen" : "activityCard"}>
      <div className="activityHead">
        <h3>Activity</h3>
        <Button className="btnMain">
          Hours <img src={chiron} />
        </Button>
      </div>
      <div className="weekSection">
        {btnClicked && (
          <div>
            <h3 className="weekHours">24 Hours</h3>
            <h3 className="weekHours">12 Hours</h3>
            <h3 className="weekHours">0 Hours</h3>
          </div>
        )}
        {activityData.map((item, index) => {
          return (
            <div className="activityWeek">
              {index == 3 && <HourBox />}
              <img src={item.image} />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCard;
