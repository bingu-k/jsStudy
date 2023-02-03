import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom'

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">이야 진짜 싸다!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">상세페이지</Nav.Link>
            <Nav.Link href="/event">이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<>
            <div className='main-bg'></div>
            <Container>
              <Row>
              {
                shoes.map(function(shoe){ return (<Card shoe={shoe} key={shoe.id}></Card>) })
              }
              </Row>
            </Container>
          </>} />
        <Route path='/detail' element={<>{shoes.map(function(shoe){return(<Detail shoe={shoe} key={shoe.id}/>)})}</>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path='*' element={<div>없는 페이지요</div>}/>
      </Routes>

    </div>
  );
}

function Event(props) {
  let navigate = useNavigate();
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <button onClick={()=>{navigate("one")}}>one</button>
      <button onClick={()=>{navigate("two")}}>two</button>
      <Outlet></Outlet>
    </div>
  )
}

function About(props) {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <Col>
      <img src={props.shoe.url} width="80%"/>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
      <p>Price : {props.shoe.price.toLocaleString('ko-KR')}원</p>
    </Col>
  )
}

function Detail(props) {
  return (
    <Container>
      <Row>
        <Col>
          <img src={ props.shoe.url } width="100%" />
        </Col>
        <Col>
          <h4 className='pt-5'>{ props.shoe.title }</h4>
          <p>{ props.shoe.content }</p>
          <p>Price : {props.shoe.price.toLocaleString('ko-KR')}원</p>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
