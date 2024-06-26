import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyCom = () => {
  // state variable - Super powerful variable.

  const [listofRestro, setListofRestro] = useState([]);
  const [filterResto, setFilteredRestro] =useState([]);
  const [searchText, setSearchText] = useState("");

  // Filter Restro card update the ui card

  const handleInputClick = () => {
    const filteredRestro = listofRestro.filter((res) =>
      res.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestro(filteredRestro);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setListofRestro(json);
    setFilteredRestro(json)
    console.log(json);
  };

  // Conditional Rendering with teritary operator
  //  if(listofRestro.length ===0){
  //   return <Shimmer/>
  //  }
  return listofRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search-box">
          <input type="text" value={searchText} onChange={handleInputChange} />
          <button onClick={handleInputClick}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listofRestro.filter(
              (res) => res?.rating?.rate > 4
            );
            setListofRestro(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restro-container">
        {filterResto.map((restaurant) => (
          <ResturantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyCom;
