import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, getTaskList } from "../../components/Todo/TodoSlice";
import "./Todolist.css";
export default function TodoListSaga() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTaskList());
    return () => {};
  }, [dispatch]);

  let [state, setState] = useState({
    values: {
      name: "",
    },
    errors: {
      name: "",
    },
  });
  const { taskList } = useSelector((state) => state.todo);
  console.log("taskList", taskList);

  const handleChange = (e) => {
    let { value, name } = e.target;
    let newValues = { ...state.values };

    newValues = { ...newValues, [name]: value };

    let newErrors = { ...state.errors };
  

    let regexString = /^[a-z A-Z]+$/;

    if (!regexString.test(value) || value.trim() === "") {
      newErrors[name] = name + " invalid !";
    } else {
      newErrors[name] = "";
    }

    setState({
      ...state,
      values: newValues,
      errors: newErrors,
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask({
      name: state.values.name
    }));
  };
  const handleDeleteTask = (id)=>{
    dispatch(deleteTask(id));
  }
  const renderTaskToDo = () => {
    return taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.name}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={()=>handleDeleteTask(item.id)}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button type="button" className="complete">
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };

  const renderTaskToDoDone = () => {
    return taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.name}</span>
            <div className="buttons">
              <button className="remove" type="button">
                <i className="fa fa-trash-alt" />
              </button>
              <button type="button" className="complete">
                <i className="far fa-undo" />
                <i className="fas fa-undo" />
              </button>
            </div>
          </li>
        );
      });
  };

  return (
    <div className="card">
      <div className="card__header">
        <img src={require("./bg.png")} alt="background" />
      </div>

      <form className="card__body">
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>
          <div className="card__add">
            <input
              id="newTask"
              name="name"
              type="text"
              placeholder="Enter an activity..."
              onChange={handleChange}
            />
            <button id="addItem" type="submit" onClick={handleAddTask}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            <ul className="todo" id="todo">
              {renderTaskToDo()}
            </ul>
            {/* Completed tasks */}
            <ul className="todo" id="completed">
              {renderTaskToDoDone()}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
