import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RES_MENU_API_URL } from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
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
    const resDetails = jsonData?.data?.cards[0]?.card?.card?.info;
    const response = {
      resDetails,
      menu: formattedMenu,
    };
    console.log(response);
    setResData(response);
  };

  return (
    <div className="">
      {resData ? <h1>{resData?.resDetails?.name}</h1> : 'No Restaurant Found'}
      {resData
        ? resData.menu.map((i, index) => {
            return (
              <div key={index}>
                <h3>{i.title}</h3>
                <ul>
                  {i?.menu?.map((j) => (
                    <li key={j.id}>
                      {j.name} - Rs. {(j.price || j.defaultPrice) / 100}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })
        : 'Menu no available for this restaurant'}
    </div>
  );
};

export default RestaurantMenu;
