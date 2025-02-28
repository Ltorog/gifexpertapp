import * as React from 'react';
import { useState } from "react";


export const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputvalue = inputValue.trim();
        if (newInputvalue.length <= 1) return ;

        onNewCategory(newInputvalue);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
}