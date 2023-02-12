import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

import MySocket from './cpnt/MySocket';
import Setname from './cpnt/Setname';
import Chat from './cpnt/Chat';
import ChatRoom from './cpnt/ChatRoom';
import { SOCKET_EVENT } from './types';

import NewChatRoom from './cpnt/NewChatRoom';

function App() {
  const [nick, setNick] = useState<string>("Unknown");

  useEffect(() => {
    if (nick.match("Unknown")) {
      MySocket.instance.emit(SOCKET_EVENT.JOIN, nick);
    }
    else {
      MySocket.instance.emit(SOCKET_EVENT.CHANGE_NICKNAME, nick);
    }
  }, [nick]);

  return (
    <Container fluid className='vw-100 vh-100'>
      <Row className='vh-100' style={{background:"black"}}>
        <Col md={3} className='px-0'>1 of 3</Col>
        <Col style={{background:"grey"}}>
          <div className="App">
            <Setname nick={nick} setNick={setNick}/>
            <Chat nick={nick}/>
            <ChatRoom nick={nick}/>
          </div>
        </Col>
        <Col md={3} className='px-0'>
          <NewChatRoom/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
