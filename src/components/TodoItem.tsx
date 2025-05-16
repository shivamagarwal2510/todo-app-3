import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 rounded shadow-sm">
      <span
        className={`flex-grow cursor-pointer text-gray-700 ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onToggle(todo.id)}
          className={`p-1 rounded-full focus:outline-none focus:ring-2 ${todo.completed ? 'text-green-500 hover:text-green-600 focus:ring-green-500' : 'text-gray-400 hover:text-green-500 focus:ring-gray-400'}`}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-1 rounded-full text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Delete todo"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
