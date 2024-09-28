import { Link } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

export default Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex flex-wrap justify-between items-center px-5 py-0 m-0 border border-gray-400 rounded-lg">
      <div className="flex items-center">
        <img className="w-12" src={LOGO} alt="app logo" />
        <h1 className="text-orange-500">Mealify</h1>
      </div>
      <div className="flex list-none">
        <ul>
          <li className="m-2.5 p-2.5 text-lg">
            <Link className="text-black no-underline" to={'/'}>Home</Link>
          </li>
          <li className="m-2.5 p-2.5 text-lg">
            <Link className="text-black no-underline" to={'/about'}>About</Link>
          </li>
          <li className="m-2.5 p-2.5 text-lg">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
              alt="cart icon"
            />
          </li>
          <li className="m-2.5 p-2.5 text-lg">( Status {onlineStatus ? '🟢' : '🔴'} )</li>
        </ul>
      </div>
    </div>
  );
};
