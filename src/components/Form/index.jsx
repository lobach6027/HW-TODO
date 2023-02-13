import React from "react";
import s from "./style.module.css";

export default function Form({ addTask }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const { day, priority, description } = event.target;
    addTask(day.value, priority.value, description.value);
    day.value = 'select day';
    priority.value = "select priotity";
    description.value = "";
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.options}>
        <select name="day" className={s.optionBlock} required>
          <option  selected disabled hidden>
            select day
          </option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <select name="priority" className={s.optionBlock} required>
        <option  selected disabled hidden>
        select priority
          </option>
          <option value="Low">Low</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className={s.descrBlock}>
        <input
          name="description"
          className={s.description}
          type="text"
          placeholder="enter description"
          required
        />
        <button className={s.addButton}>add  new task</button>
      </div>
    </form>
  );
}
