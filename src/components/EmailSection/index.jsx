import React, { useState } from "react";
import "./emailSection.css";
import chiron from "../../assets/icons/chironRight.svg";
import e1 from "../../assets/icons/email1.svg";

const EmailSection = () => {
  const [eId, setId] = useState(1);

  const emailClicked = (e) => {
    e.preventDefault();
    setId(e.target.id);
  };
  return (
    <div className="mainEmail">
      <div className="emailHead">
        <h3>Recent emails</h3>
        <span>
          More <img src={chiron} />
        </span>
      </div>
      {[1, 2, 3].map((item, index) => {
        console.log(index);
        console.log(eId, "eId");
        return (
          <div
            className={
              eId == index ? "emailInfo emailInfoClicked" : "emailInfo"
            }
            id={index}
            key={item}
            onClick={(e) => emailClicked(e)}
          >
            <div className="emailPerson">
              <img src={e1} />
              <h3 className="eName">Elizabeth</h3>
            </div>
            <p className="mstatus">Meeting Scheduled</p>
            <p className="mtime">2.24PM</p>
          </div>
        );
      })}
    </div>
  );
};

export default EmailSection;
