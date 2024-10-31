import { RecoilRoot } from 'recoil';

import { TodoList } from './components';


export function App() {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-red flex justify-center items-start">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
