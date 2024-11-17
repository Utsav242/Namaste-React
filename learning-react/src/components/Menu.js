import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const Menu = () => {
  // const [menuCard, setmenuCard] = useState(null);
  const { resId } = useParams();

  const menuCard = useRestroMenu(resId);

  const [showIndex, setshowIndex] = useState(1);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try{
  //   const data = await fetch(MENU_API + resId);
  //   const menuData = await data.json();
  //   setmenuCard(menuData?.data);
  //   console.log(menuData)
  //   }
  //   catch(error){
  //       console.log("Error fetching menu", error)
  //   }
  // };

  if (menuCard == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuCard?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuCard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(
    "checkk",
    menuCard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    menuCard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("filtered", categories);
  return (
    <div className="menuList text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      {/* category accordian */}
      {categories.map((category, index) => (
        <ResCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showBtn={index ==showIndex ? true : false}
          setshowIndex={() =>setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Menu;

