import React, { useEffect, useState } from "react";
import axios from "axios";
import { AsyncPaginate } from "react-select-async-paginate";
export default function Search({ handleSearch }) {
  const [search, setSearch] = useState(null);

  function handleChange(data) {
    setSearch(data);
    handleSearch(data);
  }
  async function loadOptions(search) {
    const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: {
        minPopulation: "10000",
        namePrefix: `${search}`,
      },
      headers: {
        "x-rapidapi-key": "9d8b2cb099mshc71861affb0cb77p1b9a69jsn6b9d36b3babe",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return {
        options: response.data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode} `,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="container">
        <div className="w-m-xl max-w-2xl mx-auto  my-5">
          <AsyncPaginate
            placeholder="search for city"
            debounceTimeout={700}
            value={search}
            loadOptions={loadOptions}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
