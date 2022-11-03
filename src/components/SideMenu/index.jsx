import React from "react";
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

import "./sidemenu.css";

const SideMenu = () => {
  const arr1 = [icon, icon2, icon3, icon4, icon5, icon6, icon7];

  return (
    <div className="sideContainerMain">
      <img className="rightBtn" src={rightBtn} />
      <div className="customBorder bg-dark d-flex flex-column justify-content-between align-items-center pt-4 pb-4 h-100 ">
        <div>
          <img src={iconUpside} />
        </div>
        <div className="d-flex flex-column">
          {arr1?.map((item, index) => {
            return <img className="mt-4" src={item} />;
          })}
        </div>
        <div>
          <img src={iconDownside} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
