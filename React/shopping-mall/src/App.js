import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import axios, { Axios } from 'axios';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './Detail.js';
import Cart from './Cart.js';
import { Route, Routes, useNavigate, Outlet, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addSample } from "./store/userSlice.js";


function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">이야 진짜 싸다!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail/0">상세페이지</Nav.Link>
            <Nav.Link href="/event">이벤트</Nav.Link>
            <Nav.Link href="/cart">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<>
            <div className='main-bg'></div>
            <Container>
              <Row md={3}>
                {
                  shoes.map(function(shoe){
                    return ( <Card shoe={shoe} key={shoe.id}></Card> ) })
                }
              </Row>
            </Container>

            <Button onClick={() => {
              axios.get(`https://codingapple1.github.io/shop/data${count}.json`)
              .then((data) => {
                let copyShoes = [...shoes, ...data.data];
                setShoes(copyShoes);
                setCount(count + 1);
              })
              .catch(() => {
                console.log('실패함 ㅅㄱ')
              })
            }}>더보기</Button>{' '}
          </>} />
        <Route path='/detail/:id' element={ <Detail shoes={shoes}/> }/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path='/cart' element={<Cart />}/>
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
  let dispatch = useDispatch();
  return (
    <Col>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoe.id + 1}.jpg`} width="80%"/>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
      <p>Price : {props.shoe.price.toLocaleString('ko-KR')}원</p>
      <Button variant="danger" onClick={() => {
        console.log("what");
        dispatch(addSample(props.shoe));
      }}>구매하기</Button>{' '}
    </Col>
  )
}

export default App;
