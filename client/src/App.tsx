import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ws from "ws";
const SERVER = "ws://localhost:8080";
const test = new WebSocket(`${SERVER}?name=TruyenNguyen`);
test.onopen = (e) => {
  console.log("Connect success");
};
function App() {
  const [text, setText] = useState("");
  const [serverText, setServerText] = useState<string[]>([]);

  const sendData = () => {
    test.send(text);
  };

  test.onmessage = function (event) {
    console.log(event);
    console.log(`[message] Data received from server: ${event.data}`);
    setServerText([...serverText, event.data]);
  };
  return (
    <div className="App">
      <header className="App-header">
        {serverText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <input onChange={(e) => setText(e.target.value)} />
        <button onClick={sendData}>Send data</button>
      </header>
    </div>
  );
}

export default App;
