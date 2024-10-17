import { CLOUDINARY_RES_CARD_IMAGE_URL } from '../utils/constants';

const MenuCategoryItem = ({ item }) => {
  const { price, defaultPrice, name, showImage, imageId } = item;
  return (
    <div
      className="flex justify-between w-4/6 border p-3 m-2 rounded-lg"
      key={item.id}
    >
      {/* info */}
      <div className="">
        <div className="">{name}</div>
        <div className="">Rs. {(price || defaultPrice) / 100}</div>
      </div>
      {/* image */}
      <img
        className="h-2/4 w-6/12"
        src={CLOUDINARY_RES_CARD_IMAGE_URL + imageId}
        alt="food-item"
      />
    </div>
  );
};

export default MenuCategoryItem;
