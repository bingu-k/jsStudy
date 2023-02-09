import 'bootstrap/dist/css/bootstrap.min.css';
import { Dispatch, SetStateAction, useRef } from "react";
import { InputEvent } from "../types";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function Setname({nick, setNick} :{nick:string, setNick:Dispatch<SetStateAction<string>>}) {
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event :InputEvent) => {
    event.preventDefault();
    changeName();
  };

  const changeName = () => {
    const enteredText = nicknameInputRef.current!.value;
    if (enteredText !== "") {
      setNick(enteredText);
      nicknameInputRef.current!.value = "";
    }
  }

  return (
    <form className="nickname" onSubmit={submitHandler}>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" style={{width :150}}>MyName</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          ref={nicknameInputRef}
          placeholder="Input your name"
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          style={{width :100}}
          onClick={changeName}>
        변경</Button>
      </InputGroup>
    </form>
  );
};
