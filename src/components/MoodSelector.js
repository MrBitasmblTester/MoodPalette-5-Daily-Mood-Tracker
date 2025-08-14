import React from "react";
const moods = ["😀","😢","😡","😴"];
export default function MoodSelector({onSelect}) {
  return (<div>{moods.map(m=> <button key={m} onClick={()=>onSelect(m)}>{m}</button>)}</div>);
}