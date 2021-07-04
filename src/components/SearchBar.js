import '../App.css';
import React from 'react';
import {useState} from 'react';
import Test from './Test';
import Vaccine from './Vaccine'

const SearchBar = (props) => {
    const [query, setQuery] = useState("")
    console.log(query)
    return(
        <div className="App">
            <h1>search</h1>
            <input type="text" name="search" placeholder="Search by pincode" onChange={e => setQuery(e.target.value)}/>
            <Vaccine pincode={query}/>
        </div>
    )
}

export default SearchBar;