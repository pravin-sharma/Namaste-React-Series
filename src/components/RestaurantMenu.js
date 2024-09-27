import { useParams } from 'react-router-dom';
import useResData from '../utils/useResData';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useResData(resId);

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
