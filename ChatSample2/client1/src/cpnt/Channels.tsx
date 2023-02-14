import { Container, ButtonGroup, Button } from "react-bootstrap";

export function Channels() {
	let b : { name:string, num:number }[] = [];
	for (let i :number = 1; i <= 5; ++i) {
	  b.push({name :`${i}번 채널`, num :i});
	}
	return (
		<Container className="mb-auto p-0 Scrollable">
      <ButtonGroup vertical className="w-100">
        {
          b.map((obj :{ name:string, num:number }, idx :number) => {
            return (
              <Button key={idx}
                variant="outline-light"
                size="lg">
                <h4>{obj.name}</h4>
              </Button>
            );
          })
        }
      </ButtonGroup>
    </Container>
	);
}