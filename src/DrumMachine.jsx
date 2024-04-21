import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DrumPad } from "./components/DrumPad";
import { Display } from "./components/Display";

function DrumMachine(props) {
  const [audio, setAudio] = useState("Drum Machine");
  const setAudioName = (audioName = "Drum Machine") => {
    setAudio((audio) => (audio = audioName));
  };
  return (
    <>
      <div className="d-flex h-100 w-100 justify-content-center align-items-center p-3">
        <div id="drum-machine" className="d-flex">
          <Display audioName={audio} />
          <DrumPad
            data={props.data}
            audioName={audio}
            setAudioName={setAudioName}
          />
        </div>
      </div>
    </>
  );
}

export default DrumMachine;
