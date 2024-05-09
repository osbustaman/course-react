import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'HunterXHunter']);
    }



    return (
        <>
            {/* titulo */}
            <h2>GifExpertApp</h2>


            {/* input */}
            <AddCategory 
                // setCategories={ setCategories }
            />


            {/* Listado de Gif */}

            <ol>
                { categories.map( category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>

            {/* Gif Item */}
        </>
        
    )
}
