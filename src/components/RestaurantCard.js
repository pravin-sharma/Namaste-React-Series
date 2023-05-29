import { CLOUDINARY_RES_CARD_IMAGE_URL } from '../utils/constants';

export default RestaurantCard = ({ restaurantData }) => {
  const { name, cloudinaryImageId, veg, cuisines, avgRating, slaString } =
    restaurantData;

  return (
    <div className="restaurant-card">
      <img
        src={`${CLOUDINARY_RES_CARD_IMAGE_URL}/${cloudinaryImageId}`}
        alt="image"
        className="image"
      />
      <p className="name">{name}</p>
      <p className="type">Type: {veg ? 'Veg' : 'Veg & Non-Veg'}</p>
      <p className="cuisine">Cuisine: {cuisines?.join(', ')}</p>
      <p className="rating">Stars: {avgRating}</p>
      <p className="eta">ETA: {slaString?.toLowerCase()}</p>
    </div>
  );
};
