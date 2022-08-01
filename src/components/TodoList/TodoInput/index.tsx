import React from 'react';

interface TodoInputProps {
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const TodoInput = ({
  handleSubmit,
  handleOnChange,
  inputValue,
}: TodoInputProps) => {
  return (
    <form data-testid="todo-form">
      <input
        type="text"
        placeholder="Enter Item"
        onChange={handleOnChange}
        value={inputValue}
        data-testid="todo-input"
      />

      <button
        type="submit"
        data-testid="todo-input-button"
        onClick={handleSubmit}
      >
        Add Item!
      </button>
    </form>
  );
};

export default TodoInput;
