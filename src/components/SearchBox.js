import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const SearchBox = ({setramInfo}) => {

    const [TypeID, setTypeID] = useState("")

    const SearchType =()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${TypeID}`)
        .then(res => setramInfo(res.data) )
    };
    return (
        <>
            <input type="text"  className='input-value'
             onChange={e => setTypeID(e.target.value)}value= {TypeID}
            />
            <button className='button-search' onClick={SearchType}>SearchID</button>
        </>
    );
};

export default SearchBox;