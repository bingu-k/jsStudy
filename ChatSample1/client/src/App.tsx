import React from 'react';
import './App.css';


class App extends React.Component {
  ws :any;

  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:2222/ws");
    this.ws.onopen = () => {
      console.log("connected!!");
    };
  };

  SendMessage = () => {
    this.ws.send("hello this is client Message");
    this.ws.onmessage = (event : MessageEvent) => {
      console.log(event);
      console.log(event.data);
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={ this.SendMessage }>Send</button>
        </header>
      </div>
    );
  }
}

export default App;
