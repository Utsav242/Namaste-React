import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyCom = () => {
  // state variable - Super powerful variable.

  const [listofRestro, setListofRestro] = useState([]);
  const [filterResto, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Filter Restro card update the ui card

  const handleInputClick = () => {
    const filteredRestro = listofRestro.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();
  if(onlinestatus == false ) 
    return(
  <h1>Looks like you're offline !!</h1>
  );

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
              (res) => res.info.avgRating > 4
            );
            setListofRestro(filtered);
            setFilteredRestro(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restro-container">
        {filterResto.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <ResturantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyCom;
