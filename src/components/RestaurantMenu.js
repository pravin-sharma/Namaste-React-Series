import { useParams } from 'react-router-dom';
import useResData from '../utils/useResData';
import { useState } from 'react';

const RestaurantMenu = () => {
  const [showCategoryItems, setShowCategoryItems] = useState(false);
  const { resId } = useParams();
  const resData = useResData(resId);

  if (!resData) {
    return <div className="">Loading Restaurant Menu.....</div>;
  }

  const { name, rating, ratedBy, costForTwoMessage } = resData?.resDetails;
  return (
    <>
      <div className="w-4/12 mx-auto my-6">
        <div className="font-bold text-4xl">{name}</div>
        <div className="flex justify-start">
          <div className="font-bold text-xl mr-6">
            {rating} ({ratedBy})
          </div>
          <div className="font-bold text-xl">{costForTwoMessage}</div>
        </div>
      </div>
      {resData.menu.map((category, index) => {
        return (
          <>
            {/* Menu */}
            <div className="w-4/12 mx-auto border-b-[16px] my-6 cursor-pointer" onClick={()=>setShowCategoryItems(!showCategoryItems)}>
              <div className="flex justify-between">
                <div className="flex">
                  <h3 className="font-bold text-2xl">{category.title}</h3>
                  <h3 className="font-bold text-2xl">
                    {' '}
                    ({category.menu.length})
                  </h3>
                </div>
                <div>
                  <img
                    src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                    alt="show"
                    className="w-6"
                  />
                </div>
              </div>

              {showCategoryItems && <ul>
                {category?.menu?.map((item) => (
                  <li key={item.id}>
                    {item.name} - Rs. {(item.price || item.defaultPrice) / 100}
                  </li>
                ))}
              </ul>}
            </div>
          </>
        );
      })}
    </>
  );
};

export default RestaurantMenu;
