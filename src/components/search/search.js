import React, { useState } from "react";
import { geoAPI, apiUrl } from "../../apis/weatherapi";

import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchData }) => {
  const [search, setSearch] = useState(null);
  function Handleonchange(searchData) {
    setSearch(searchData);
    onSearchData(searchData);
  }

  function loadOptions(inputValue) {
    fetch(
      `${apiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoAPI
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return [];
    });
  }
  return (
    <div>
      search
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={Handleonchange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
