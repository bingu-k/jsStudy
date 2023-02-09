import React, { useEffect, useState } from 'react';
import './App.css';

import MySocket from './cpnt/MySocket';
import Setname from './cpnt/Setname';
import Chat from './cpnt/Chat';
import ChatRoom from './cpnt/ChatRoom';
import { SOCKET_EVENT } from './types';

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
    <div className="App">
      <Setname nick={nick} setNick={setNick}/>
      <Chat nick={nick}/>
      <ChatRoom nick={nick}/>
    </div>
  );
}

export default App;
