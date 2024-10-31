import { atom } from 'recoil';

interface Todo {
  text: string;
  isCompleted: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});
