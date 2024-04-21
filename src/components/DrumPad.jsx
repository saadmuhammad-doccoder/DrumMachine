import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pad } from "./Pad";
import "./Drumpad.css";

export function DrumPad(props) {
  return (
    <div className="drumPad text-bg-secondary w-100 h-100">
      {props.data.map((pad, index) => (
        <Pad
          key={index}
          url={pad.url}
          keyBtn={pad.key}
          id={pad.id}
          setAudioName={props.setAudioName}
        />
      ))}
    </div>
  );
}
