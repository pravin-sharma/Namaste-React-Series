import { useState } from 'react';
import MenuCategoryItem from './MenuCategoryItem';

const RestaurantMenuCategory = ({ category }) => {
  const [showCategoryItems, setShowCategoryItems] = useState(false);
  const { title, menu } = category;
  const categoryItems = menu;
  return (
    <>
      <div
        className="w-4/12 mx-auto border-b-[16px] my-6 cursor-pointer"
        onClick={() => setShowCategoryItems(!showCategoryItems)}
      >
        <div className="flex justify-between">
          <div className="flex">
            <h3 className="font-bold text-2xl">{title}</h3>
            <h3 className="font-bold text-2xl"> ({categoryItems.length})</h3>
          </div>
          <div>
            <img
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              alt="show"
              className="w-6"
            />
          </div>
        </div>

        {showCategoryItems && (
          <div className="flex flex-col items-center">
            {categoryItems?.map((item, index) => (
              <MenuCategoryItem key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantMenuCategory;
