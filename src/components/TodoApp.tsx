import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: nextId,
        text: text.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNextId(nextId + 1);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg max-w-md">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">Simple Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul className="mt-6 space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No todos yet! Add one above.</p>
      )}
    </div>
  );
};

export default TodoApp;
