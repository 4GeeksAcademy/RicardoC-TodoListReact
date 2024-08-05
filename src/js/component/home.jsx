import React, { useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [taskEntry, setTaskEntry] = useState("");

    const taskDelete = (index) => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
    };

    return (
        <div className="text-center container mt-5">
            <form>
                <label htmlFor="Deberes" className="form-label h1" style={{ color: "#28ADB5" }}>TodoList</label>
                <input type="text" className="form-control" id="Pendiente" aria-describedby="emailHelp" placeholder="GOALS"
                    value={taskEntry}
                    onChange={(e) => setTaskEntry(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && taskEntry.trim()) {
                            e.preventDefault();
                            setTodo([...todo, taskEntry]);
                            setTaskEntry("");
                        }
                    }}
                />
                <div id="emailHelp" className="form-text">tasks to complete:</div>
            </form>
            <div className="text-start d-md-flex justify-content-md-start">
                <ul>
                    {todo.map((tarea, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center list-group-item shadow rounded p-3 mt-4">
                            {tarea}
                            <button type="button" className="btn btn-sm ms-2" onClick={() => taskDelete(index)}>
                                <i className="fa fa-times" style={{ color: "red", fontSize: "1.5rem" }}>x</i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button className="btn mt-2" style={{ backgroundColor: "black", color: "white" }} onClick={() => setTodo([])}>
                    Eliminar tareas
                </button>
            </div>
        </div>
    );
};

export default TodoList;
