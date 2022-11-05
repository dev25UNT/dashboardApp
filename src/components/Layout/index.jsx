import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Header from "../Header";
import SideMenu from "../SideMenu";
import LeaderCard from "../LeadersCard";
import InfoCard from "../InfoCard";
import { CardGroup, Stack } from "react-bootstrap";
import EmailSection from "../EmailSection";
import ActivityCard from "../ActivityCard";
import Info2Card from "../Info2Card";
import ImageCard from "../ImageCard";
import cardIcon from "../../assets/icons/card1Icon.svg";
import in2 from "../../assets/icons/in2.svg";
import in3 from "../../assets/icons/in3.svg";
import in4 from "../../assets/icons/in4.svg";
import lead2 from "../../assets/icons/lead2.svg";
import lead3 from "../../assets/icons/lead3.svg";
import lead4 from "../../assets/icons/lead4.svg";
import lead1 from "../../assets/icons/leader1.svg";
import email1 from "../../assets/icons/email1.svg";
import emage2 from "../../assets/icons/emage2.svg";
import emage3 from "../../assets/icons/emage3.svg";
import newInfo from "../../assets/icons/newInfo2.svg";
import book from "../../assets/icons/bookOpen.svg";
import Ellips1 from "../../assets/icons/Ellips1.svg";
import Ellips2 from "../../assets/icons/Ellips2.svg";
import Ellips3 from "../../assets/icons/Ellips3.svg";
import Ellips4 from "../../assets/icons/Ellips4.svg";
import EmblaCarousel from "../Embla/EmblaCarousel";
import inf1 from "../../assets/icons/info2img.svg";
import inf2 from "../../assets/icons/info2img2.svg";
import line1 from "../../assets/icons/line1.svg";
import line2 from "../../assets/icons/line2.svg";
import chironRight from "../../assets/icons/chironRight.svg";

export const infoData = [
  { image: cardIcon, text1: "24", text2: "Days in training" },
  { image: in2, text1: "3040", text2: "Total of points" },
  { image: in3, text1: "4", text2: "Completed Courses" },
  { image: in4, text1: "5844", text2: "Ranking Position" },
];

const leadData = [
  { image: lead1, text1: "Lucas", text2: "34056", icon: Ellips1 },
  { image: lead2, text1: "Fernanda", text2: "21032", icon: Ellips2 },
  { image: lead3, text1: "Aaliyah", text2: "18489", icon: Ellips3 },
  { image: lead4, text1: "Zoe", text2: "16320", icon: Ellips4 },
];

const info2Data = [
  {
    image: newInfo,
    image2: inf1,
    text1: "English",
    text2: "Level 1",
    text3: "18/60",
  },
  {
    image: book,
    image2: inf2,
    text1: "UI/UX Design",
    text2: "Advanced",
    text3: "52/120",
  },
];

const info2DataSecondary = [
  {
    image: newInfo,
    image2: inf1,
    image3: line1,
    text1: "English",
    text2: "Level 1",
    text3: "18/60",
    date1: "24 June,22",
    date2: "28 Aug,22",
  },
  {
    image: book,
    image2: inf2,
    image3: line2,
    text1: "UI/UX Design",
    text2: "Advanced",
    text3: "52/120",
    date1: "1 Aug,22",
    date2: "28 Nov,22",
  },
];

const emailData = [
  {
    image: email1,
    text1: "Elizabeth",
    text2: "Meeting Scheduled",
    text3: "2.24PM",
  },
  {
    image: emage2,
    text1: "James",
    text2: "Update on wireframe to UI Design",
    text3: "11.12AM",
  },
  {
    image: emage3,
    text1: "Rebecca",
    text2: "Meeting Scheduled",
    text3: "Yesterday at 3.34PM",
  },
];

const Layout = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <Container>
      <Row>
        <Col xs={btnClicked ? 3 : 1}>
          <SideMenu btnClicked={btnClicked} setBtnClicked={setBtnClicked} />
        </Col>
        <Col xs={btnClicked ? 9 : 11}>
          {" "}
          {/* <Button variant="primary">Primary</Button> */}
          <Header />
          <Container>
            <Row className="secondRow">
              <Col xs={8}>
                {/* <LeaderCard /> */}
                {btnClicked ? (
                  <EmblaCarousel btnClicked={btnClicked} infoData={infoData} />
                ) : (
                  <Stack direction="horizontal" gap={5}>
                    {infoData.map((item, index) => {
                      if (btnClicked) {
                        if (index < 3) {
                          return (
                            <InfoCard
                              btnClicked={btnClicked}
                              cardIcon={item.image}
                              text1={item.text1}
                              text2={item.text2}
                            />
                          );
                        }
                      } else {
                        return (
                          <InfoCard
                            btnClicked={btnClicked}
                            cardIcon={item.image}
                            text1={item.text1}
                            text2={item.text2}
                          />
                        );
                      }
                      // <InfoCard />
                      // <InfoCard />
                    })}
                  </Stack>
                )}
                <div className="activitySection">
                  <ActivityCard btnClicked={btnClicked} />
                  {btnClicked ? (
                    ""
                  ) : (
                    <div className="info2Container">
                      {info2Data.map((item, index) => {
                        return (
                          <Info2Card
                            text1={item.text1}
                            text2={item.text2}
                            text3={item.text3}
                            image={item.image}
                            image2={item.image2}
                          />
                        );
                      })}
                      {/* <Info2Card /> */}
                    </div>
                  )}
                </div>
                <EmailSection emailData={emailData} />
              </Col>
              <Col xs={4}>
                {btnClicked ? (
                  <div className="info2Container" style={{ width: "100%" }}>
                    <div className="progressHead">
                      <h3>In Progress</h3>
                      <div className="more">
                        <h3>More</h3>
                        <img src={chironRight} />
                      </div>
                    </div>
                    {info2DataSecondary.map((item, index) => {
                      return (
                        <Info2Card
                          text1={item.text1}
                          text2={item.text2}
                          text3={item.text3}
                          image={item.image}
                          image2={item.image2}
                          image3={item.image3}
                          date1={item.date1}
                          date2={item.date2}
                          btnClicked={btnClicked}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <ImageCard />
                )}
                <LeaderCard leadData={leadData} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
