import React from 'react';

interface ITodo {
  isCompleted: boolean;
  text: string;
}

interface IListItem {
  index: number;
  todo: ITodo;
  toggleCompletion: (index: number) => void;
}

const ListItem: React.FC<IListItem> = ({ index, todo, toggleCompletion }) => {
  return (
    <li key={index} className="animate-fadeIn flex items-center">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleCompletion(index)}
          className="hidden"
        />
        <div
          className={`w-5 h-5 rounded-full border-2 border-purple-600 ${
            todo.isCompleted ? 'bg-purple-600' : 'bg-white'
          }`}
        />
      </label>
      <div
        className={`flex items-center border-b w-full pt-2 pb-2 ${
          index === 0 ? 'border-t' : ''
        }`}
      >
        <span
          className={`text-lg ml-2 ${
            todo.isCompleted ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
    </li>
  );
};

export default ListItem;
