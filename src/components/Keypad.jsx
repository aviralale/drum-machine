import React, { useState } from "react";
import Key from "./Key";
import "./Keypad.css";
import ChordDisplay from "./ChordDisplay";

export default function Keypad() {
    const [chords, setChords] = useState("");
    const [cheer, setCheer] = useState("");
    const play = (str) =>{
        if(str =="q"||str=="Q"){
            setCheer("Rock on!");
            setChords("Q");
        }
        if(str =="w"||str=="W"){
            setCheer("Drum Roll!");
            setChords("W");
        }
        if(str =="e"||str=="E"){
            setCheer("Music Time!");
            setChords("E");
        }
        if(str =="a"||str=="A"){
            setCheer("Big hit!");
            setChords("A");
        }
        if(str =="s"||str=="S"){
            setCheer("Jamming on!");
            setChords("S");
        }
        if(str =="d"||str=="D"){
            setCheer("Popstarts!");
            setChords("D");
        }
        if(str =="z"||str=="Z"){
            setCheer("on the mood!");
            setChords("Z");
        }
        if(str =="x"||str=="X"){
            setCheer("on the rhythm!");
            setChords("X");
        }
        if(str =="c"||str=="C"){
            setCheer("Party on!");
            setChords("C");
        }
    }
    window.document.onkeyup = function(event){
        let keystroke = event.key
        if (keystroke === "q" || keystroke === "Q") {
            play("Q");
          } else if (keystroke === "w" || keystroke === "W") {
            play("W");
          } else if (keystroke === "e" || keystroke === "E") {
            play("E");
          } else if (keystroke === "a" || keystroke === "A") {
            play("A");
          } else if (keystroke === "s" || keystroke === "S") {
            play("S");
          } else if (keystroke === "d" || keystroke === "D") {
            play("D");
          } else if (keystroke === "z" || keystroke === "Z") {
            play("Z");
          } else if (keystroke === "x" || keystroke === "X") {
            play("X");
          } else if (keystroke === "c" || keystroke === "C") {
            play("C");
          }
    }
    const handleKeyClick = (str) => {
        play(str);
      };
  return (
    <div className="flex justify-center items-center keypad p-5">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex">
          <Key str="Q" onClick={handleKeyClick}/>
          <Key str="W" onClick={handleKeyClick}/>
          <Key str="E" onClick={handleKeyClick}/>
        </div>
        <div className="flex">
          <Key str="A" onClick={handleKeyClick}/>
          <Key str="S" onClick={handleKeyClick}/>
          <Key str="D" onClick={handleKeyClick}/>
        </div>
        <div className="flex">
          <Key str="Z" onClick={handleKeyClick}/>
          <Key str="X" onClick={handleKeyClick}/>
          <Key str="C" onClick={handleKeyClick}/>
        </div>
      </div>
      <div className="w-28 m-5">
      <ChordDisplay chord={chords} cheer={cheer}/>
      </div>
    </div>
  );
}
