import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { FETCH_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Never use useState out side of component
  // used to create oacl state variable in functional component
  // use hooks on the top
  // never use useState inside any conditions like if() loops for while etc
  //
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_API);
    const json = await data.json();
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter((x) =>
                  x.info.name.toLowerCase().includes(searchTxt)
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (x) => x.info.avgRatingString > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((x) => (
          <Link key={x.info.id} to={"/restaurants/" + x.info.id}>
            <RestaurantCard resData={x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
