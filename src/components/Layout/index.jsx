import React from "react";
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
const Layout = () => {
  return (
    <Container>
      <Row>
        <Col xs={1}>
          <SideMenu />
        </Col>
        <Col xs={11}>
          {" "}
          {/* <Button variant="primary">Primary</Button> */}
          <Header />
          <Container>
            <Row className="secondRow">
              <Col xs={8}>
                {/* <LeaderCard /> */}
                <Stack direction="horizontal" gap={5}>
                  <InfoCard />
                  <InfoCard />
                  <InfoCard />
                  <InfoCard />
                </Stack>
                <div className="activitySection">
                  <ActivityCard />
                  <div className="info2Container">
                    <Info2Card />
                    <Info2Card />
                  </div>
                </div>
                <EmailSection />
              </Col>
              <Col xs={4}>
                <ImageCard />
                <LeaderCard />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
