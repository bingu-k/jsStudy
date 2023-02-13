import { Container } from "react-bootstrap";
import { ChatMenuBar } from "./ChatMenuBar";
import { Channels } from "./Channels";
import { Message, SHOW_CHANNEL } from "../types"
import { useState } from "react";
import { ChatRoom } from "./ChatRoom";

export default function ChatPart() {
  let [msgList, setMsgList] :[msgList :Message[], setMsgList:React.Dispatch<React.SetStateAction<Message[]>>] = useState<Message[]>([]);
  let [flag, setFlag] : [flag :boolean, setFlage :React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(SHOW_CHANNEL);
  
	return (
    <Container fluid className="d-flex flex-column w-100 vh-100 p-3">
      <ChatMenuBar flag={flag} setFlag={setFlag}/>
      {
        flag === SHOW_CHANNEL ? <Channels/> : <ChatRoom msgList={msgList} setMsgList={setMsgList}/>
      }
    </Container>
	);
}