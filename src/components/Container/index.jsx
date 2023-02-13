import React from "react";
import Card from "../Card";
import s from './style.module.css'

export default function Container({ todo, deleteTasks, deleteTask }) {
  const mon = todo.filter((item) => item.day === "Monday");
  const t = todo.filter((item) => item.day === "Tuesday");
  const w = todo.filter((item) => item.day === "Wednesday");
  const th = todo.filter((item) => item.day === "Thursday");
  const fr = todo.filter((item) => item.day === "Friday");
  const sat = todo.filter((item) => item.day === "Saturday");
  const sun = todo.filter((item) => item.day === "Sunday");
  return (
    <div className={s.container} >
      <div className={mon.length > 0 ? s.day : s.hideContainer}>
      <div className={s.title}>Monday</div>
      <div className={s.tasksContainer}>{mon.map((item)=><div className={item.priority==='Low'? s.lowPriority: s.highPrioryty} key={item.id}><Card {...item}  deleteTask={deleteTask}/></div>)}</div>
      <button onClick={()=>deleteTasks("Monday")} className={s.dellButton}>x</button>
      </div>

      <div className={t.length > 0 ? s.day : s.hideContainer}>
        <div className={s.title}>Tuesday</div>
        <div className={s.tasksContainer}>{t.map((item)=><div className={item.priority==='Low'? s.lowPriority: s.highPrioryty} key={item.id}><Card {...item}  deleteTask={deleteTask}/></div>)}</div>
        <button onClick={()=>deleteTasks("Tuesday")} className={s.dellButton}>x</button>
      </div>

      <div className={w.length > 0 ? s.day : s.hideContainer}>
        <div className={s.title}>Wednesday</div>
        <div className={s.tasksContainer}>{w.map((item)=><div className={item.priority==='Low'? s.lowPriority: s.highPrioryty} key={item.id}><Card {...item}  deleteTask={deleteTask}/></div>)}</div>
        <button onClick={()=>deleteTasks("Wednesday")} className={s.dellButton}>x</button>
      </div>

      <div className={th.length > 0 ? s.day : s.hideContainer}>
        <div className={s.title}>Thursday</div>
        <div className={s.tasksContainer}>{th.map((item)=><div className={item.priority==='Low'? s.lowPriority: s.highPrioryty} key={item.id}><Card {...item}  deleteTask={deleteTask}/></div>)}</div>
        <button onClick={()=>deleteTasks("Thursday")} className={s.dellButton}>x</button>
      </div>

      <div className={fr.length > 0 ? s.day : s.hideContainer}>
        <div className={s.title}>Friday</div>
       <div className={s.tasksContainer}> {fr.map((item)=><div className={item.priority==='Low'? s.lowPriority: s.highPrioryty} key={item.id}><Card {...item} deleteTask={deleteTask}/></div>)}</div>
        <button onClick={()=>deleteTasks("Friday")} className={s.dellButton}>x</button>
      </div>

      <div className={sat.length > 0 ? s.day : s.hideContainer}>
        <div className={s.title}>Saturday</div>
       <div className={s.tasksContainer}> {sat.map((item)=><div className={item.priority==='Low'? s.lowPriority: s.highPrioryty} key={item.id}><Card {...item} deleteTask={deleteTask}/></div>)}</div>
        <button onClick={()=>deleteTasks("Saturday")} className={s.dellButton}>x</button>
      </div>

      <div className={sun.length > 0 ? s.day : s.hideContainer}>
        <div className={s.title}>Sunday</div>
        <div  className={s.tasksContainer}>{sun.map((item)=><div className={item.priority==='Low'? s.lowPriority: s.highPrioryty} key={item.id}><Card {...item} deleteTask={deleteTask}/></div>)}</div>
        <button onClick={()=>deleteTasks("Sunday")} className={s.dellButton}>x</button>
      </div>
    </div>
  );
}
