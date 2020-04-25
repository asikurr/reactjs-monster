import React from 'react'

import '../searchBox/searchBox.css'

export const SearchBox = ({placeholder, eventHandler}) => (
    <input 
        className='searchBo'
        type='search' 
        placeholder={placeholder} 
        onChange={eventHandler}
        />
)