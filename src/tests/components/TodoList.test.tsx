import TodoList from 'components/TodoList';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const listItems = ['Esto es una prueba', 'Segunda Prueba'];

test('loads and displays TodoList component', () => {
  render(<TodoList todoItems={listItems}></TodoList>);
  expect(screen.getByTestId('todo-list-container')).toHaveTextContent(
    'TODO LIST'
  );
});

test('todo item appears after user inputs', () => {
  render(<TodoList todoItems={listItems}></TodoList>);

  fireEvent.change(screen.getByTestId('todo-input'), {
    target: { value: 'New Todo Item' },
  });

  fireEvent.click(screen.getByTestId('todo-input-button'), {});

  expect(screen.getByTestId('todo-list-items')).toHaveTextContent(
    'New Todo Item'
  );
});
