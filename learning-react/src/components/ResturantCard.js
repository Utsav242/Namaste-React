import { CDN_URL } from "../utils/constant";

const ResturantCard = ({ restData }) => {
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
      </div>
    </div>
  );
};

export default ResturantCard;
