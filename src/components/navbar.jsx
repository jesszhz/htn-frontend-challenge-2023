import { Link } from 'react-router-dom';
import { Logo } from '../assets';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

export default function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      handleLogout();
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="mx-auto px-6 py-5 flex flex-row justify-between border-b-2 border-white">
      <Link to="/">
        <Logo />
      </Link>
      <button
        onClick={handleClick}
        className="text-lg underline ease-in-out duration-100  hover:no-underline">
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
