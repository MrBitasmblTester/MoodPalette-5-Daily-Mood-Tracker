import React, {useState} from "react";
import MoodSelector from "./components/MoodSelector";
export default function App() {
  const [mood, setMood] = useState(null);
  return (<div><MoodSelector onSelect={setMood}/></div>);
}