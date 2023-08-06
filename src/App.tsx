// App.js
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setDeposit, setWithdraw } from './store/slice'; // Make sure this path is correct
import { RootState } from './store';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const currentAmount = useSelector((state: RootState) => state.account.value);
  const [changeAmount, setChangeAmount] = useState<number>(0); // Use `number` type

  return (
    <div className="App">
      <h1>Your bank account amount: {currentAmount}</h1>
      <input
        type="number"
        onChange={(e) => setChangeAmount(parseInt(e.target.value, 10))}
        value={changeAmount}
      />

      <button onClick={() => dispatch(setDeposit(changeAmount))}>Deposit</button>
      <button onClick={() => dispatch(setWithdraw(changeAmount))}>Withdraw</button>
    </div>
  );
}

export default App;
