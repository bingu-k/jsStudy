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
  const chatWindow = useRef(null);

  useEffect(() => {
    if (receivedMsg) {
      dispatch(addMsg(receivedMsg))
    }
  }, [receivedMsg]);

  MySocket.instance.on(SOCKET_EVENT.RECEIVE, setReceivedMsg);
  
  return (
    <div
      className="d-flex flex-column"
      style={{ width: 1000 }}>
      <div className="text-box">
        <span>{nick}님 환영합니다.</span>
      </div>
      <div
        className="chat-window card"
        ref={chatWindow}
      >
      {
        msgList && msgList.map((msg :Message, idx :number) => {
          return (
            <div key={idx} className="d-flex flex-row">
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