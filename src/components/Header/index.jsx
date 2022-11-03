import React from "react";
import Stack from "react-bootstrap/Stack";
import bell from "../../assets/icons/bellRinging.svg";
import chiron from "../../assets/icons/chironUp.svg";
import notification from "../../assets/icons/messageNotification.svg";
import proPic from "../../assets/icons/profilePic.svg";
import "./header.css";

const Header = () => {
  return (
    <Stack direction="horizontal" gap={3} className="head">
      <div className="title">Good Morning, Oliver!</div>
      <img className="ms-auto" src={bell} />
      <img src={notification} />
      <img src={proPic} />
      <img src={chiron} />
    </Stack>
  );
};

export default Header;
