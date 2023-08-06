import { setAdd, setReduced } from '../store/multiple';
import { Button } from 'flowbite-react';
import { Dispatch } from 'redux';

interface HomeProps {
    dispatch: Dispatch,
    changeAmount: number,
    setChangeAmount: React.Dispatch<React.SetStateAction<number>>; 
}

function HomePage({dispatch, changeAmount, setChangeAmount} : HomeProps) {
  return (
    <>
        <input 
        type="number"
        onChange={(e) => setChangeAmount(parseInt(e.target.value))}
        value={changeAmount}
        className="bg-gray-50 p-2.5 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full" />

        <Button 
            onClick={() => dispatch(setAdd(changeAmount))} 
            color="warning" className="px-5" pill>
            Add
        </Button>            
        <Button 
            onClick={() => dispatch(setReduced(changeAmount))} 
            className="px-5" color="failure" pill>
            Reduced
        </Button>
    </>
  )
}

export default HomePage