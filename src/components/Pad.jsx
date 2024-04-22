import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export function Pad(props) {
  const pad = useRef();
  const keyPad = useRef();

  const handleKeyDown = (event) => {
    const btnPressed = event;
    if (btnPressed.keyCode === props.keyCode) {
      console.log(btnPressed.keyCode, props.keyCode);
      //   console.log(keyPad.current.firstChild);
      const audio = document.querySelector(`#${props.keyBtn}`);
      props.setAudioName(props.id);
      audio.currentTime = 0;
      audio.play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (event) => {
    event.target.firstChild.play();
    const audio = event.target.firstChild;
    audio.currentTime = 0;

    props.setAudioName(props.id);
    // setTimeout(() => audio.play(), 100);
  };

  return (
    <div
      id={props.id}
      className="drum-pad btn btn-secondary btn-lg text-center d-flex justify-content-center align-items-center"
      onClick={handleClick}
      ref={keyPad}
    >
      <audio
        className="clip"
        id={props.keyBtn}
        src={props.url}
        ref={pad}
      ></audio>
      {props.keyBtn}
    </div>
  );
}

Pad.propType = {
  keyBtn: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
};
