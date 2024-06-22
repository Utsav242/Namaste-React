const ResturantCard = ({ restData }) => {
    // Destructring props
  
    const { costForTwo, name, cuisines, avgRating } = restData;
  
    return (
      <div className="restroCard">
        <div className="foodImg">
          <img
            src="https://b.zmtcdn.com/data/pictures/0/19773840/6a00aa75c0d9da1fefbde2af3eb1e237_o2_featured_v2.jpg"
            alt="foodImg"
          />
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