import { useEffect, useRef, useState } from "react";
import { Button, Card, Container, Form, InputGroup, Row, Image, Col } from "react-bootstrap";
import { Message, SOCKET_EVENT } from "../types";
import MySocket from "./MySocket";

export function ChatRoom({msgList, setMsgList} :{msgList :Message[], setMsgList:React.Dispatch<React.SetStateAction<Message[]>>}) {
  let [receivedMsg, setReceivedMsg] :[receivedMsg :Message|undefined, setReceivedMsg:React.Dispatch<React.SetStateAction<Message|undefined>>] = useState<Message>();
  const chatInputRef = useRef<HTMLInputElement>(null);

  const buttonHandler = () => {
    const enteredText : Message = { name: "me", text :chatInputRef.current!.value, time :new Date().toLocaleTimeString('en-US')};
    if (chatInputRef.current!.value !== "") {
      MySocket.instance.emit(SOCKET_EVENT.SEND, enteredText);
      setReceivedMsg(enteredText);
      chatInputRef.current!.value = "";
    }
  }
  const submitHandler = (event :React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    buttonHandler();
  };

  MySocket.instance.on(SOCKET_EVENT.RECEIVE, setReceivedMsg);

  useEffect(() => {
    if (receivedMsg) {
      setMsgList([...msgList, receivedMsg]);
    }
  }, [receivedMsg]);

  return (
		<Container className="w-100 h-auto p-0 mt-auto">
        {
          msgList.map((msg :Message) => {
            return (
              <Row className="d-flex ChatRoom">
                <Col md={2} className="d-flex p-0">
                  <Image roundedCircle src="/img/Anonymous.jpeg" width={45} height={45}/>
                </Col>
                <Col className="d-flex ps-0">
                  <Card>
                    <Card.Text>This is some text within a card body.</Card.Text>
                  </Card>
                </Col>
              </Row>
            );
          })
        }
      <Row className="pt-3">
        <hr style={{ color: "white" }}/>
      </Row>
      <Row style={{ color: "white" }}>
        <InputGroup onSubmit={submitHandler}>
          <Form.Control
            placeholder="메세지 보내기"
            aria-label="With textarea"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-light" id="button-addon2" onClick={buttonHandler}>
            보내기
          </Button>
        </InputGroup>
      </Row>
		</Container>
	);
}