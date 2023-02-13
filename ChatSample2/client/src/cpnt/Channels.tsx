import { Container, Row, ButtonGroup, Button } from "react-bootstrap";

export function Channels() {
	let b : { name:string, num:number }[] = [];
	for (let i :number = 1; i <= 25; ++i) {
	  b.push({name :`${i}번 채널`, num :i});
	}
	return (
		<Container className="w-100 h-auto p-0 mb-auto Channels">
      <Row className="d-flex align-items-top justify-content-center">
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
	);
}