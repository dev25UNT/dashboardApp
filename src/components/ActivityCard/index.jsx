import React from "react";
import { Button } from "react-bootstrap";
import "./activityCard.css";
import chiron from "../../assets/icons/chironRight.svg";
import "../LeadersCard/leaderCard.css";
import Union from "../../assets/icons/Union.svg";

const ActivityCard = () => {
  return (
    <div className="activityCard">
      <div className="activityHead">
        <h3>Activity</h3>
        <Button className="btnMain">
          Hours <img src={chiron} />
        </Button>
      </div>
      <div className="weekSection">
        {[1, 2, 3, 4, 5, 6, 7].map(() => {
          return (
            <div className="activityWeek">
              <img src={Union} />
              <p>M</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCard;
