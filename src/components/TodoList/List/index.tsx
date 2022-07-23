import React from 'react';

interface ListProps {
  todoList: string[];
}

const List = ({ todoList }: ListProps) => {
  return (
    <div>
      {todoList.map((todo, idx) => (
        <p key={idx}>{todo}</p>
      ))}
    </div>
  );
};

export default React.memo(List);
