import { Link } from 'react-router-dom';
import { LOGO } from '../utils/constants';

export default Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO} alt="app logo" />
      <h1 className="logo-title">Mealify</h1>
    </div>
    <div className="nav-list">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <img
            className="cart-icon"
            src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
            alt="cart icon"
          />
        </li>
      </ul>
    </div>
  </div>
);
