import { Button, Col, Container, Navbar, Row } from "react-bootstrap";

export default function NewChatRoom() {
	return (
    <>
      <header>
        <Navbar className="border">
          <Container>
            <Button
              variant="outline-light"
							size="lg">
              왼쪽
            </Button>
          </Container>
          <Container>
            채팅창
          </Container>
          <Container>
            <Button variant="secondary">오른쪽</Button>
          </Container>
        </Navbar>
      </header>
    </>
		// <Container>
		// 	<Row>
    //     <Col xs={3}>
    //       <Button>채널</Button>
    //     </Col>
    //     <Col xs={6}>
    //     </Col>
    //     <Col xs={3}>
    //       <Button>나가기</Button>
    //     </Col>
    //   </Row>
		// </Container>
	);
}