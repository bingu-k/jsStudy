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
		<>
			<Container>
				<Row>
					<Col xs={3}>1 of 3</Col>
					<Col xs={6} style={{background :"black"}}>
						<div className="App">
							<Setname nick={nick} setNick={setNick}/>
							<Chat nick={nick}/>
							<ChatRoom nick={nick}/>
						</div>
					</Col>
					<Col xs={3}>
						<NewChatRoom/>
					</Col>
				</Row>
			</Container>
		</>
  );
}

export default App;
