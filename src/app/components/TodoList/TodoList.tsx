import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { todoListState } from '../../atoms/todoAtom';

import { ListItem } from '..';

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodoList([...todoList, { text: newTodo.trim(), isCompleted: false }]);
      setNewTodo('');
    }
  };

  const toggleCompletion = (index: number) => {
    setTodoList(
      todoList.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Todo List</h1>
      <ul className="w-full max-w-md mb-5 space-y-2 transition-all duration-300">
        {todoList.map((todo, index) => (
          <ListItem
            todo={todo}
            index={index}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
      <div className="flex items-center w-full max-w-md transition-all duration-300 ease-in-out">
        <span className="text-purple-600 text-xl w-[20px]">+</span>
        <div className="flex-1 border-b border-t pt-2 pb-2">
          <input
            type="text"
            className="flex-1 border-gray-300 focus:outline-none px-2 py-1 mr-3"
            placeholder="Add new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 text-white px-4 py-1 rounded-lg transition-all duration-300"
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
