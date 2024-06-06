import { useState } from 'react';

export const useCounter = (initialValue) => {

    const [ counter, setCounter ] = useState(initialValue);

    const handleAdd = (value = 1) => {
        setCounter( counter + value );
    }

    const handleSubtract = (value = 1) => {
        if(counter <= 0) {
            setCounter(initialValue);
            return;
        }
        setCounter( counter - value );
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