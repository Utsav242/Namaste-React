import ResturantCard, { withLocaltiy } from "./ResturantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyCom = () => {
  // state variable - Super powerful variable.

  const [listofRestro, setListofRestro] = useState([]);
  const [filterResto, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResturantCardRating = withLocaltiy(ResturantCard);

  console.log("aa", listofRestro);
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
  if (onlinestatus == false) return <h1>Looks like you're offline !!</h1>;

  // Conditional Rendering with teritary operator
  //  if(listofRestro.length ===0){
  //   return <Shimmer/>
  //  }

  const {loggedInUser, setUserInfo} = useContext(UserContext);;
  return listofRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex justify-between">
        <div className="mt-5">
          <input
            type="text"
            className=" border-solid border-2 border-indigo-60 rounded-lg"
            value={searchText}
            onChange={handleInputChange}
          />
          <button className="bg-green-400 px-2" onClick={handleInputClick}>
            Search
          </button>
        </div>
        <button
          className="rounded-lg bg-slate-500 p-2 m-2"
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

        <div>
          <label>User Name</label>
          <input className="border border-black" value={loggedInUser} onChange={(e)=> setUserInfo(e.target.value)}></input>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterResto.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.data?.isNewlyOnboarded ? (
              <ResturantCardRating restData={restaurant} />
            ) : (
              <ResturantCard restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyCom;
