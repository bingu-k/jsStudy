import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from "react";
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { InputEvent, Message, SOCKET_EVENT } from '../types';
import { addMsg } from './msgList';
import MySocket from './MySocket';

export default function Chat({ nick } :{nick :string}) {
  let dispatch = useDispatch();

  const chatInputRef = useRef<HTMLInputElement>(null);

  const buttonHandler = () => {
    const enteredText : Message = { name: nick, text :chatInputRef.current!.value};
    if (chatInputRef.current!.value !== "") {
      MySocket.instance.emit(SOCKET_EVENT.SEND, enteredText);
      dispatch(addMsg({name: "me", text:chatInputRef.current!.value}));
      chatInputRef.current!.value = "";
    }
  }

  const submitHandler = (event :InputEvent) => {
    event.preventDefault();
    buttonHandler();
  };
    
  return (
    <form className="nickname" onSubmit={submitHandler}>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" style={{width :150}}>{nick}</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          ref={chatInputRef}
          placeholder="Send your Message"
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          style={{width :100}}
          onClick={buttonHandler}>
        보내기</Button>
      </InputGroup>
    </form>
  );
}