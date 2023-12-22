import React, { useState } from 'react';

const AddTab: React.FC = () => {
    const [todo, setTodo] = useState<Todo>({
        id: 0,
        description: '',
        date: new Date().toISOString().slice(0,10),
        done: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            description: event.target.value,
        });
    };

    const handleAddTodo = () => {
        if (todo.description.trim() !== '') {
            // Retrieve existing todos from local storage
            const existingTodos = localStorage.getItem('todos');
            const todos: Todo[] = existingTodos ? JSON.parse(existingTodos) : [];

            // Generate unique id for the new todo
            const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

            // Create new todo object
            const newTodo: Todo = {
                id: newId,
                description: todo.description,
                date: new Date().toISOString().slice(0,10),
                done: false,
            };

            // Add new todo to the list
            todos.push(newTodo);

            // Save updated todos to local storage
            localStorage.setItem('todos', JSON.stringify(todos));

            // Clear the input field
            setTodo({
                id: 0,
                description: '',
                date: new Date().toISOString().slice(0,10),
                done: false,
            });
        }
    };

    return (
        <div>
            <input type="text" value={todo.description} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default AddTab;
