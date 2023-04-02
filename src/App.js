import Draggable from "react-draggable";
import "./App.css";
import image from "./cats.webp";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef(null);
  const [positionDisplay, setPositionDisplay] = useState({
    x1: "-",
    y1: "-",
    x2: "-",
    y2: "-",
  });

  return (
    <div className="App" style={{}}>
      {/* <div className="Sidebar">
        <ul className="Tools">
          <li>
            <button>Line</button>
          </li>
          <li>
            <button>Box</button>
          </li>
        </ul>
        <hr />
        <ul className="Elements">
          {Array.from(Array(400)).map((e, i) => (
            <li key={i}>test</li>
          ))}
        </ul>
      </div> */}
      <div className="Image">
        <img src={image} alt="cats" />
        <svg>
          <Line
            bounds=".Image"
            onDrag={(pos1, pos2) => {
              setPositionDisplay({
                x1: pos1.x,
                y1: pos1.y,
                x2: pos2.x,
                y2: pos2.y,
              });
            }}
          ></Line>
        </svg>
      </div>
      <div>
        <div>
          x1: {positionDisplay.x1}, y1: {positionDisplay.y1}
          x2: {positionDisplay.x2}, y2: {positionDisplay.y2}
        </div>
      </div>
    </div>
  );
}

function Line({ bounds, onDrag = (pos1, pos2) => {} }) {
  const [pos1, setPos1] = useState({ x: 50, y: 50 });
  const [pos2, setPos2] = useState({ x: 50, y: 100 });

  useEffect(() => {
    onDrag(pos1, pos2);
  }, [pos1, pos2]);

  return (
    <>
      <Draggable
        bounds={bounds}
        defaultPosition={{ x: 50, y: 50 }}
        onDrag={(_, data) => {
          setPos1({ x: data.x, y: data.y });
        }}
      >
        <circle r="10" stroke="red" stroke-width="3" />
      </Draggable>
      <line
        x1={pos1.x}
        y1={pos1.y}
        x2={pos2.x}
        y2={pos2.y}
        stroke="black"
      ></line>
      <Draggable
        bounds={bounds}
        defaultPosition={{ x: 50, y: 100 }}
        onDrag={(_, data) => {
          setPos2({ x: data.x, y: data.y });
        }}
      >
        <circle r="10" stroke="red" stroke-width="3" />
      </Draggable>
    </>
  );
}

export default App;
