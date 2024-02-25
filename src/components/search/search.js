import React, { useState } from "react";
import { geoAPI, apiUrl } from "../../apis/weatherapi";

import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchData }) => {
  const [search, setSearch] = useState(null);
  function Handleonchange(searchData) {
    setSearch(searchData);
    onSearchData(searchData);
  }

  async function loadOptions(inputValue ) {
    try {
      const response = await fetch(
        `${apiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoAPI
      );
  
      const data = await response.json();

      console.log(data)
  
      const result = {
        options: data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}   ${city.countryCode}`,
        })),
      };
  
      console.log(result);
      
      return result;
    } catch (error) {
      console.error(error);
      // Handle the error or return a default result if necessary
      return { options: [] };
    }
  }
  




  //   return fetch(
  //     `${apiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
  //     geoAPI
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {console.log(response)})
  //     .then((response) => {
  //       return {
  //         options: response.data.map((city) => {
  //           return {
  //             value: `${city.latitude} ${city.longitude}`,
  //             label: `${city.name}   ${city.countryCode}`,
  //           };

  //         }),
  //       };
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       return [];
  //     });
  // }
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
