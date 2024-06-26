import { CDN_URL } from "../utils/constant";

const ResturantCard = ({ restData }) => {
  // Destructring props

  const { cloudinaryImageId, costForTwo, name, cuisines, avgRating } =
    restData.info;

  return (
    <div className="restroCard">
      <div className="foodImg">
        <img src={CDN_URL + cloudinaryImageId} alt="foodImg" />
      </div>
      <div className="foodDetail">
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <p>{costForTwo}</p>
        <span>{avgRating} Stars</span>
      </div>
    </div>
  );
};

export default ResturantCard;
