import { Button, Col, Container, Row } from "react-bootstrap";
import { SHOW_CHANNEL, SHOW_CHATROOM } from "../types"

const CHANNEL : string = "Channel";
const CHATROOM : string = "Chatting";

export function ChatMenuBar({flag, setFlag} :{flag :boolean, setFlag :React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <Container className="w-100 p-0">
      <Row
        className="d-flex text-center justify-content-center align-items-center">
        <Col>
          <span style={{ color:"white", fontSize:"auto"}}>
          { flag === SHOW_CHANNEL ? CHANNEL : CHATROOM }
          </span>
        </Col>
        <Col md={4}>
          <Button className="MenuBtn"
            variant="outline-light"
            onClick={() => {
              flag === SHOW_CHANNEL ? setFlag(SHOW_CHATROOM) : setFlag(SHOW_CHANNEL);
            }}>{ flag !== SHOW_CHANNEL ? CHANNEL : CHATROOM }
          </Button>
        </Col>
      </Row>
      <Row className="pt-3">
        <hr style={{ color:"white" }}/>
      </Row>
    </Container>
  );
};