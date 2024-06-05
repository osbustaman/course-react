import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const initialValue = 1;
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter( initialValue );

  return (
    <>
        <h1>Counter With Hook: { counter }</h1>
        <hr />

        <button className='btn btn-primary' onClick={ handleAdd }>+1</button>
        <button className='btn btn-primary' onClick={ handleReset }>Reset</button>
        <button className='btn btn-primary' onClick={ handleSubtract }>-1</button>

    </>
  )
}
