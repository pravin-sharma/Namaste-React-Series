import { CLOUDINARY_RES_CARD_IMAGE_URL } from '../utils/constants';

export default RestaurantCard = ({ restaurantData }) => {
  const { name, cloudinaryImageId, veg, cuisines, avgRating, slaString } =
    restaurantData;

  return (
    <div className="border border-gray-300 rounded-xl m-4 w-80 flex flex-col p-4 hover:border-orange-400 hover:shadow-md cursor-pointer">
      <img
        src={`${CLOUDINARY_RES_CARD_IMAGE_URL}/${cloudinaryImageId}`}
        alt="image"
        className="w-full h-full rounded-xl object-cover"
      />
      <p className="text-lg font-bold m-4">{name}</p>
      <p className="type">Type: {veg ? 'Veg' : 'Veg & Non-Veg'}</p>
      <p className="cuisine">Cuisine: {cuisines?.join(', ')}</p>
      <p className="rating">Stars: {avgRating}</p>
      <p className="eta">ETA: {slaString?.toLowerCase()}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div style={{ position: 'relative' }}>
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
