import React, { useState } from "react";
import "./counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Howl, Howler } from "howler";
import add from "../sounds/add.mp3";
import minus from "../sounds/minus.mp3";
import reset from "../sounds/uiclick.mp3";

function Counter() {
  Howler.volume(1.0);

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter">
        <p>{count}</p>
        <div className="buttons">
          <button
            className="sub"
            onClick={() => {
              setCount(count - 1);
              soundPlay(minus);
            }}
          >
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
          <button
            className="reset"
            onClick={() => {
              setCount(count - count);
              soundPlay(reset);
            }}
          >
            reset
          </button>
          <button
            className="add"
            onClick={() => {
              setCount(count + 1);
              soundPlay(add);
            }}
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
