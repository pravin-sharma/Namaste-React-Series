import { useEffect, useState } from 'react';
import { RES_MENU_API_URL } from './constants';

const useResData = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchResData(resId);
  }, []);

  const fetchResData = async (resId) => {
    const data = await fetch(
      RES_MENU_API_URL + resId
    );
    const jsonData = await data.json();

    const fullMenu =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const formattedMenu = [];
    fullMenu.forEach((i) => {
      const itemCards = i?.card?.card?.itemCards;
      const title = i?.card?.card?.title;
      if (itemCards?.length) {
        const formattedItemCards = [];
        itemCards.forEach((i) => {
          formattedItemCards.push(i?.card?.info);
        });

        formattedMenu.push({
          title,
          menu: formattedItemCards,
        });
      }
    });
    const resDetails = {
      name: jsonData?.data?.cards[0]?.card?.card?.text,
      rating: jsonData?.data?.cards[2]?.card?.card?.info?.avgRatingString,
      ratedBy: jsonData?.data?.cards[2]?.card?.card?.info?.totalRatingsString,
      costForTwoMessage: jsonData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage
    }
    const response = {
      resDetails,
      menu: formattedMenu,
    };
    setResData(response);
  };

  return resData;
};

export default useResData;
