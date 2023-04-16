export default RestaurantCard = ({ restaurantData }) => {
  const { name, resImage, type, cuisine, rating, eta } = restaurantData;

  return (
    <div className="restaurant-card">
      <img src={resImage} alt="image" className="image" />
      <p className="name">{name}</p>
      <p className="type">type: {type}</p>
      <p className="cuisine">cuisine: {cuisine}</p>
      <p className="rating">starts: {rating}</p>
      <p className="eta">ETA: {eta} minutes</p>
    </div>
  );
};
