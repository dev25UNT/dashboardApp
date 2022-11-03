import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./leaderCard.css";
import chir from "../../assets/icons/chironRight.svg";
import leader1 from "../../assets/icons/leader1.svg";

const LeaderCard = () => {
  return (
    <Card className="leaderCard">
      <Row className="leaderRow">
        <Col>
          <h1>Leaders</h1>
        </Col>
        <Col>
          <Button className="btnMain">
            View All <img src={chir} />
          </Button>
          {/* <h1>Goof</h1> */}
        </Col>
      </Row>
      <ListGroup className="list-group-flush">
        {[1, 2, 3, 4].map(() => {
          return (
            <ListGroup.Item className="listItem">
              <Row>
                <Col xs={8}>
                  <div className="mainCol">
                    <img src={leader1} />
                    <div>
                      <h5 className="leaderName">Lucas</h5>
                      <h5 className="status">Meeting Scheduled</h5>
                    </div>
                  </div>
                </Col>
                <Col xs={4}>
                  <Button className="btnLeader">34056</Button>
                </Col>
                {/* <Col></Col> */}
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
};

export default LeaderCard;
