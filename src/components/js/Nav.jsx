import React from 'react';
import SearchBar from './SearchBar'

const Nav = (props)=>{
    // console.log(props.onSearch)
    return(
        <div>
            <SearchBar
                onSearch={props.onSearch}
                character={props.character}
                handleChange={props.handleChange}
                logout={props.logout}
            />
        </div>
    )
}

export default  Nav;