import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

const TodoCards: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        // Retrieve todos from local storage
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleComplete = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: true };
            }
            return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleDelete = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} style={todo.done ? {backgroundColor:"blue"} : {backgroundColor:"red"}}>
                    <TodoCard todo={todo} />
                    <button onClick={() => handleComplete(todo.id)}>Complete</button>
                    {' '}
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TodoCards;
