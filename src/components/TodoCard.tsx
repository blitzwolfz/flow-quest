import React from 'react';

interface TodoCardProps {
    todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
    return (
        <div className="card" style={{backgroundColor: "lightblue"}}>
            <h3>{todo.description}</h3>
            <p>{todo.done ? 'Completed' : 'Not Completed'}</p>
            <p>{todo.date}</p>
        </div>
    );
};

export default TodoCard;
