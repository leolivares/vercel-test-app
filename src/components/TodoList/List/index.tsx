import React from 'react';
import './style.sass';

interface ListProps {
  todoList: string[];
}

const List = ({ todoList }: ListProps) => {
  return (
    <div className="todo-list-items">
      {todoList.map((todo, idx) => (
        <p className="todo-list-item" key={idx}>
          {todo}
        </p>
      ))}
    </div>
  );
};

export default React.memo(List);
