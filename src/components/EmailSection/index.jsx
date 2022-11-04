import React, { useState } from "react";
import "./emailSection.css";
import chiron from "../../assets/icons/chironRight.svg";
import e1 from "../../assets/icons/email1.svg";

const EmailSection = ({ emailData }) => {
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
      {emailData.map((item, index) => {
        return (
          <div
            className={
              eId == index ? "emailInfo emailInfoClicked" : "emailInfo"
            }
            id={index}
            key={index}
            onClick={(e) => emailClicked(e)}
          >
            <div className="emailPerson">
              <img src={item.image} />
              <h3 className="eName">{item.text1}</h3>
            </div>
            <p className="mstatus">{item.text2}</p>
            <p className="mtime">{item.text3}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EmailSection;
