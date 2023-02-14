import { useEffect, useRef } from "react";
import { Card, Container, Row, Image, Col } from "react-bootstrap";
import { Message } from "../types";

export function ChatRoom({msgList} :{msgList :Message[]}) {
  const chatWindow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
    }
  }, [msgList]);

  return (
		<Container
      className="w-100 p-0 mt-auto Scrollable"
      ref={chatWindow}>
      {
        msgList.map((msg :Message, idx :number) => {
          return (
            <Row className="pt-1" key={idx}>
              <Col md={2} className="ps-3">
                <Image roundedCircle src="/img/Anonymous.jpeg" width={35} height={35}/>
              </Col>
              <Col className="d-flex p-1">
                <Row>{msg.name}</Row>
                <Row>
                  <Card>
                    <Card.Text>{msg.time}</Card.Text>
                  </Card>
                </Row>
              </Col>
            </Row>
          );
        })
      }
		</Container>
	);
}
