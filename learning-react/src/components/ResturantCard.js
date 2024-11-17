import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";




const ResturantCard = ({ restData }) => {

  const {loggedInUser} = useContext(UserContext);
  
  // Destructring props
  const { cloudinaryImageId, costForTwo, name, cuisines, avgRating } =
    restData.info;

  return (
    <div className="m-4 p-4 w-[200px] h-80  bg-zinc-500 rounded-lg">
      <div className="foodImg">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="foodImg" />
      </div>
      <div className="foodDetail">
        <h4 className="text-white font-bold">{name}</h4>
        <h5 className="">{cuisines.join(", ")}</h5>
        <p>{costForTwo}</p>
        <span>{avgRating} Stars</span>
        <h4>User : {loggedInUser}</h4>
      </div>
    </div>
  );
};


// Highorder comp

export const withLocaltiy=(ResturantCard)=>{
  return(props) =>{
    return(
      <>
      <label style={color= 'black'}>RatingLABEL</label>
      <ResturantCard {...props} />
      </>
    )
  }

}

export default ResturantCard;
