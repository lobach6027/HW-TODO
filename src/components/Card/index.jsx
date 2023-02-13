import React from "react";
import s from './style.module.css'

export default function Card({ description, id, deleteTask}) {
  return (
    <div className={s.descr}>
      <span>
        {description}
      </span>
      <button onClick={()=>deleteTask(id)}  className={s.dellButton}>x</button>
    </div>
  );
}
