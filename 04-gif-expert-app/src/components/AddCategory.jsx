import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        setCategories( categories => [inputValue, ...categories]);
        setInputValue('')  ;
        
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gif..."
                value={inputValue}
                onChange={ (event) => { setInputValue(event.target.value)}}
            />
        </form>
    )
}