import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ChatPart from './cpnt/ChatPart';

function App() {
  return (
		<Container fluid className='vw-100 vh-100 p-0 m-0'>
			<Row className='w-100 h-100 m-0' style={{backgroundColor:"black"}}>
				<Col md={3} className='h-100'>1 of 3</Col>
				<Col className='h-100' style={{backgroundColor:"grey"}}>2 of 3</Col>
				<Col md={3} className='h-100'>
					<ChatPart/>
				</Col>
			</Row>
		</Container>
  );
}

export default App;
