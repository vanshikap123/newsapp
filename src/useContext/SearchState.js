import React, { useState } from 'react'
import SearchContext from './SearchContext'
const SearchState = (props) => {
    const [searchItem, setSearchItem] = useState("");
    console.log(searchItem)
  return (
    <SearchContext.Provider value={{searchItem,setSearchItem}}>
        {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState
