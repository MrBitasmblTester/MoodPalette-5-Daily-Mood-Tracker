import React from "react";
export default function CalendarHeatmap({entries}) {
  return (<div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)'}}>
    {entries.map((day,i)=><div key={i} style={{background:day.color||'#eee',width:20,height:20}}></div>)}
  </div>);
}