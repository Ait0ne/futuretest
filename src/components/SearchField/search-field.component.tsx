import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import {SeacrFieldContainer} from './search-field.styles';
import {Button, Input}from '../../styles/base-styles';

interface SearchFieldProps {
    changeFilterValue: (text:string)=> void
}


const SearchField:React.FC<SearchFieldProps> = ({changeFilterValue}) => {
    const [filter, setFilter] = useState('')
    
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
    }

    const clearFilter = () => {
        setFilter('')
        changeFilterValue('')
    }

    const handleEnterPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key==='Enter') {
            changeFilterValue(filter)
        }
    }

    return (
        <SeacrFieldContainer>
            <div style={{position:'relative'}}>
                <Input 
                type='text' 
                name='filter' 
                value={filter} 
                onChange={handleInputChange} 
                onKeyPress={handleEnterPress}
                placeholder='Поиск'
                />
                <FontAwesomeIcon onClick={clearFilter} icon={faTimes}/>
            </div>
            <Button onClick={() => changeFilterValue(filter)}>Найти</Button>
        </SeacrFieldContainer>
    )
}

export default SearchField;