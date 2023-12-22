import React from 'react';

interface NavTabProps {
    category: string;
    todos: number;
}

const NavTab: React.FC<NavTabProps> = ({ category, todos }) => {
    return (
        <div>
            {category} ({todos})
        </div>
    );
};

export default NavTab;
