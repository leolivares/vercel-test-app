import React, { useEffect, useState } from 'react';
import List from './List';
import TodoInput from './TodoInput';
import './style.sass';

interface TodoListProps {
  todoItems: string[];
}

const TodoList = ({ todoItems = [] }: TodoListProps) => {
  const [todoList, setTodoList] = useState<string[]>(todoItems);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="todo-list-container" data-testid="todo-list-container">
      <h1>TODO LIST</h1>

      <TodoInput
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
      />

      <List todoList={todoList} />
    </div>
  );
};

export default TodoList;
