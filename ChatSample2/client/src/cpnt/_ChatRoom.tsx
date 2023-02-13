import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { Message, SOCKET_EVENT } from '../types';
import { addMsg } from "./msgList";
import MySocket from './MySocket';

export default function ChatRoom({ nick } :{nick :string}) {
  let msgList :Message[] = useSelector((state :RootState) => state.msgList );
  let dispatch = useDispatch();
  
  const [receivedMsg, setReceivedMsg] = useState<Message>();
  const chatWindow = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (receivedMsg) {
      dispatch(addMsg(receivedMsg));
    }
    if (chatWindow.current) {
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
      console.log(chatWindow.current.scrollHeight);
    }
  }, [receivedMsg]);

  MySocket.instance.on(SOCKET_EVENT.RECEIVE, setReceivedMsg);
  
  return (
    <div
      className="d-flex flex-column"
      style={{ width: "auto"}}>
      <div className="text-box" style={{ background: "black", color: "white" }}>
        <span style={{ fontSize: "200%" }}>{nick}님 환영합니다.</span>
      </div>
      <div
        className="Chat"
        ref={chatWindow}
      >
      {
        msgList && msgList.map((msg :Message, idx :number) => {
          let fontColor = msg.name === "me" ? "#b22222" : "black";
          return (
            <div key={idx} className="d-flex flex-row" 
              style={{ background: "#fffaf0", color: `${fontColor}`, fontSize: "100%"}}>
				      <div className="time">({msg.time})</div>
              <div className="message-nickname">{msg.name} :</div>
              <div>{msg.text}</div>
            </div>
            );
          }
        )
      }
      </div>
    </div>
  );
};