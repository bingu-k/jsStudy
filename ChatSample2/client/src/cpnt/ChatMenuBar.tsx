import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const SHOW_CHANNEL :boolean = false;
const SHOW_CHATROOM :boolean = true;
const CHANNEL : string = "채널방";
const CHATROOM : string = "채팅창";

export function ChatMenuBar() {
  let LBtn :string = CHANNEL;
  let RBtn :string = "나가기";
  let flag :boolean = SHOW_CHANNEL;

  useEffect(() => {
    if (flag === SHOW_CHANNEL) {
      LBtn = CHANNEL;
    }
    else if (flag === SHOW_CHATROOM) {
      LBtn = CHATROOM;
    }
  }, [flag])

  return (
    <Container className="w-100 p-0" style={{height: "90px"}}>
      <Row
        className="d-flex text-center justify-content-center align-items-center">
        <Col md={3}>
          <Button className="MenuBtn"
            variant="outline-light"
            size="lg">{LBtn}
          </Button>
        </Col>
        <Col>
          <span style={{ color:"white", fontSize: "30px"}}>
            Chat Room
          </span>
        </Col>
        <Col md={3}>
          <Button className="MenuBtn"
            variant="outline-light"
            size="lg">{RBtn}
          </Button>
        </Col>
      </Row>
      <Row className="pt-3">
        <hr style={{ color:"white" }}/>
      </Row>
    </Container>
  );
};