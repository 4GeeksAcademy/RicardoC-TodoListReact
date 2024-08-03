import React, { useState } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState(''); 
    const [todos, setTodos] = useState([]); 

    const handleKeyDown = (e) => { 
        if (e.key === 'Enter' && inputValue.trim() !== '') {  
            setTodos([...todos, inputValue]); 
            setInputValue(''); 
        }
    };

    const handleDelete = (index) => { 
        setTodos(updatedTodos);
    };

    return (
        <div className="text-center container mt-5">
            <h1>TODOS</h1>
            <label htmlFor="exampleInputEmail1" className="form-label"></label>
            <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="What needs to be done?"
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={handleKeyDown} 
            />
            {todos.map((todo, index) => ( 
                <div key={index} className="todo-list">
                    <p style={{ display: 'inline', marginRight: '10px' }}>{todo}</p>
                    <i
                        className="fa-solid fa-trash"
                        onClick={() => handleDelete(index)} 
                        style={{ cursor: 'pointer', color: 'red' }}
                    >
                    </i>
                </div>
            ))}
        </div>
    );
};

export default TodoList;