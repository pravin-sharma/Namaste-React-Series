import { useParams } from 'react-router-dom';
import useResData from '../utils/useResData';
// import { useState } from 'react';
import RestaurantMenuCategory from './RestaurantMenuCategory';

const RestaurantMenu = () => {
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
      {/* Restaurant Menu Category */}
      {resData.menu.map((category, index) => (
        <RestaurantMenuCategory category={category} key={index} />
      ))}
    </>
  );
};

export default RestaurantMenu;
