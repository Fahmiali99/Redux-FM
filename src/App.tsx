// App.js
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { useState } from 'react';
import HomePage from './Modules/home';

function App() {
  const dispatch = useDispatch();
  const currentAmount = useSelector((state: RootState) => state.multiple.value);
  const [changeAmount, setChangeAmount] = useState<number>(0);
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='container mx-auto bg-blue-100 p-20 lg:w-7/12 rounded-2xl shadow-2xl shadow-gray-400/30 border-gray-100 border '>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold'>Result: {currentAmount}</h1>
        </div>
        <div className='flex items-center space-x-4 pt-12'>
          <HomePage 
          dispatch={dispatch} 
          changeAmount={changeAmount}
          setChangeAmount={setChangeAmount}
          />
        </div>
      </div>
  </div>


  );
}

export default App;
