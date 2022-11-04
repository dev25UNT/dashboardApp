import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import iconUp from "../../assets/icons/IconUpside.svg";
import iconDown from "../../assets/icons/IconDownside.svg";
import icon from "../../assets/icons/Icon.svg";
import icon2 from "../../assets/icons/Icon2.svg";
import icon3 from "../../assets/icons/Icon3.svg";
import icon4 from "../../assets/icons/Icon4.svg";
import icon5 from "../../assets/icons/Icon5.svg";
import icon6 from "../../assets/icons/Icon6.svg";
import icon7 from "../../assets/icons/Icon7.svg";
import iconUpside from "../../assets/icons/IconUpside.svg";
import iconDownside from "../../assets/icons/IconDownside.svg";
import rightBtn from "../../assets/icons/RightButton.svg";
import btnClose from "../../assets/icons/btnClose.svg";

import "./sidemenu.css";

const SideMenu = ({ btnClicked, setBtnClicked }) => {
  const arr1 = [
    { icon: icon, text: "Overview" },
    {
      icon: icon2,
      text: "Learn",
    },
    {
      icon: icon3,
      text: "Activity",
    },
    {
      icon: icon4,
      text: "Leaderboard",
    },
    {
      icon: icon5,
      text: "Job",
    },
    {
      icon: icon6,
      text: "Community",
    },
    {
      icon: icon7,
      text: "Email",
    },
  ];

  // const [btnClicked, setBtnClicked] = useState(false);

  const btnHandler = () => {
    setBtnClicked(!btnClicked);
  };
  return (
    <div className={btnClicked ? "sideContainerMainOpen" : "sideContainerMain"}>
      <img
        className={btnClicked ? "closeBtn" : "rightBtn"}
        src={btnClicked ? btnClose : rightBtn}
        onClick={btnHandler}
      />
      <div className="customBorder">
        <div className="cntainer">
          <img src={iconUpside} />
          {btnClicked ? <h3 className="h31">Cube Classes</h3> : ""}
        </div>
        <div className="d-flex flex-column">
          {arr1?.map((item, index) => {
            return (
              <div className="cntainer mt-4">
                <img src={item.icon} />
                {btnClicked ? <h3 className="h32">{item.text}</h3> : ""}
              </div>
            );
          })}
        </div>
        <div className="cntainer">
          <img src={iconDownside} />
          {btnClicked ? <h3 className="h32">Settings</h3> : ""}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
