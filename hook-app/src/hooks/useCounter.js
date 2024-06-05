import { useState } from 'react';

export const useCounter = (initialValue) => {

    const [ counter, setCounter ] = useState(initialValue);

    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    const handleSubtract = () => {
        if(counter <= 0) {
            setCounter(initialValue);
            return;
        }
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( initialValue );
    }

    return { 
        counter, 
        handleAdd,
        handleSubtract,
        handleReset
    };
}