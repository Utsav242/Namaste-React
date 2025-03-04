import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 text-left border-gray-200 flex  border-b-2"
          >
            <div className=" w-9/12">
              <div className="py-2 ">
                <span className="font-bold">{item?.card?.info?.name}</span>
              </div>
              <div className="p-2">
                <span className="">
                  - ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                <button className="p-2 mx-5  rounded-lg bg-black text-white shadow-lg">
                  Add +{" "}
                </button>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
