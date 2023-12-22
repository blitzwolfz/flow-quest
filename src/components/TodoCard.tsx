import React from 'react';

interface TodoCardProps {
    todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
    return (
        <div className="card">
            <h3>{todo.description}</h3>
            <p>{todo.done ? 'Completed' : 'Not Completed'}</p>
        </div>
    );
};

export default TodoCard;
