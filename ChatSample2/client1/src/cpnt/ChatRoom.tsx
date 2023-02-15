import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Message } from "../types";
import { Chat } from "./Chat";

export function ChatRoom({msgList} :{msgList :Message[]}) {
  const chatWindow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
    }
  }, [msgList]);

  return (
		<Container
      className="w-100 mt-auto Scrollable"
      ref={chatWindow}>
      {
        msgList.map((msg :Message, idx :number) => {
          return (
            <Chat msg={msg} key={idx}/>
          );
        })
      }
		</Container>
	);
}
