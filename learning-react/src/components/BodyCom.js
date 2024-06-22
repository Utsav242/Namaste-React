import ResturantCard from "./ResturantCard";
import restMockData from "../utils/mockData";
import { useState } from "react";

const BodyCom = () => {

  // state variable - Super powerful variable.

const [listofRestro, setListofRestro] =useState(restMockData);

// Array Destructuring

// const arr = useState(restMockData);

// const [listofRestro, setListofRestro] = arr;



  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
         
           const filtered = listofRestro.filter((res) => res.avgRating > 4);
           setListofRestro(filtered)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restro-container">
        {listofRestro.map((restaurant) => (
          <ResturantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyCom;
