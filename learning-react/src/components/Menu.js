import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";


const Menu = () => {
  // const [menuCard, setmenuCard] = useState(null);
  const { resId } = useParams();

  const menuCard = useRestroMenu(resId);

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

  return (
    <div className="menuList">
      <p>check</p>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info.id}>
            {item?.card?.info.name} Rs-{" "}
            {item?.card?.info.price / 100 ||
              item?.card?.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;


// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constant";

// const Menu = () => {
//   const [menuCard, setmenuCard] = useState(null);

//   const { resId } = useParams();
//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try{
//     const data = await fetch(MENU_API + resId);
//     const menuData = await data.json();
//     setmenuCard(menuData?.data);
//     console.log(menuData)
//     }
//     catch(error){
//         console.log("Error fetching menu", error)
//     }
//   };

//   if (menuCard == null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     menuCard?.cards[2]?.card?.card?.info;

//   const { itemCards } =
//     menuCard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card;

//   return (
//     <>
//       <h1>{name}</h1>
//       <h2>{cuisines.join(", ")}</h2>
//       <h3>{costForTwoMessage}</h3>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item?.card?.info.id}>
//             {item?.card?.info.name} Rs-{" "}
//             {item?.card?.info.price / 100 ||
//               item?.card?.info.defaultPrice / 100}{" "}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Menu;
