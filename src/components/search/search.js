import React, { useState } from 'react'
import axios from 'axios';
import {geoAPI,}

import { AsyncPaginate } from 'react-select-async-paginate'

const Search = ({onSearchData}) => {

    const [search,setSearch ] = useState(null)
    function Handleonchange(searchData){
    setSearch(searchData)
    }

    async function   loadOptions (inputValue)  {
    
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
    }
  return (



    <div>search


        <AsyncPaginate 
        placeholder = "Search for City"
        debounceTimeout={600}
        value={search}
        onChange={Handleonchange}
        loadOptions={loadOptions}
        />
    </div>
  )
}

export default Search