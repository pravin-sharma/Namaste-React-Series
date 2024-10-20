import { Link } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import userContext from '../context/userContext';

export default Header = () => {
  const onlineStatus = useOnlineStatus();
  const UserContext = useContext(userContext);

  return (
    <div className="flex flex-wrap justify-between items-center px-5 py-4 m-3 border border-gray-400 rounded-lg">
      <Link
        className="text-black no-underline flex items-center cursor-pointer"
        to={'/'}
      >
        <img className="w-20" src={LOGO} alt="app logo" />
        <h1 className="text-orange-500 text-3xl">Mealify</h1>
      </Link>
      <div>
        <ul className="flex list-none">
          <li className="m-2.5 p-2.5 text-xl">
            <Link className="text-black no-underline" to={'/'}>
              Home
            </Link>
          </li>
          <li className="m-2.5 p-2.5 text-xl w">
            <Link className="text-black no-underline" to={'/about'}>
              About
            </Link>
          </li>
          <li className="m-2.5 p-2.5 text-xl">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
              alt="cart icon"
            />
          </li>
          <li className="m-2.5 p-2.5 text-xl">
            ( Status {onlineStatus ? '🟢' : '🔴'} )
          </li>
          <li className="m-2.5 p-2.5 text-xl">
            {UserContext?.userName || 'USER'}
          </li>
        </ul>
      </div>
    </div>
  );
};
