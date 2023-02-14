import { Button, Col, Container, Row } from "react-bootstrap";
import { SHOW_CHANNEL, SHOW_CHATROOM } from "../types"

const CHANNEL : string = "Channel";
const CHATROOM : string = "Chatting";

export function ChatMenuBar({flag, setFlag} :{flag :boolean, setFlag :React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <Container className="w-100 pt-3 px-0">
      <Row
        className="px-3 text-center align-items-center">
        <Col>
          <span style={{ color:"white", fontSize:"auto"}}>
          { flag === SHOW_CHANNEL ? CHANNEL : CHATROOM }
          </span>
        </Col>
        <Col md={4} className="p-0">
          <Button
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