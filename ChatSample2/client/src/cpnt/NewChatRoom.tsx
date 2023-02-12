import { Container, Row, Button, InputGroup, Form, ButtonGroup } from "react-bootstrap";
import { ChatMenuBar } from "./ChatMenuBar";

export default function NewChatRoom() {
  let b : { name:string, num:number }[] = [];
  for (let i :number = 1; i <= 5; ++i) {
    b.push({name :`${i}번 채널`, num :i});
  }
  console.log(b.length);
	return (
    <Container fluid className="w-100 h-100 p-3">
      <ChatMenuBar/>
      <Container className="p-0">
        <Row className="d-flex align-items-center justify-content-center">
          <section>
            <ButtonGroup vertical className="w-100">
              {
                b.map((obj :{ name:string, num:number }, idx :number) => {
                  return (
                    <Button className="ChannelBtn"
                      variant="outline-light"
                      size="lg">
                      <h4>{obj.name}</h4>
                    </Button>
                  );
                })
              }
            </ButtonGroup>
          </section>
        </Row>
      </Container>
      <Container className="w-100 p-0" style={{height: "90px"}}>
        <Row className="pt-3">
          <hr style={{ color: "white" }}/>
        </Row>
        <Row style={{ color: "white", height: "70px"}}>
          <InputGroup>
            <Form.Control
              placeholder="메세지 보내기"
              aria-label="With textarea"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-light" id="button-addon2">
              보내기
            </Button>
          </InputGroup>
        </Row>
      </Container>
    </Container>
	);
}