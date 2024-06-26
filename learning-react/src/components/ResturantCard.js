const ResturantCard = ({ restData }) => {
    // Destructring props
  
    const { title, price, rating, image } = restData;
  const IMG_URL = 'https://fakestoreapi.com/'
    return (
      <div className="restroCard">
        <div className="foodImg">
          <img
            src={image}
            alt="imgLogo"
          />
        </div>
        <div className="foodDetail">
          <h4>{title}</h4>
          <h5>{price}</h5>
          <p>{rating.rate}</p>
        </div>
      </div>
    );
  };


  export default ResturantCard;