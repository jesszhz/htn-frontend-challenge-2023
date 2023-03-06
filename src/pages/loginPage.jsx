import { useEffect, useState } from 'react';
import RainbowLogo from '../assets/logoRainbow.png';
import Input from '../components/input';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    const user = { id: 1, name: 'John Doe' };
    dispatch(login(user));
  };

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    auth: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = { ...errors };

    if (formData.email.trim() === '') {
      newErrors.email = 'Please enter your emali';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    } else {
      newErrors.email = '';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Please enter your password';
    } else {
      newErrors.password = '';
    }

    // Validate credentials  - mocked for this challenge
    if (
      (formData.email !== 'hello@test.com' || formData.password !== '123') &&
      !newErrors.email &&
      !newErrors.password
    ) {
      newErrors.auth = 'Invalid email or password';
    } else {
      newErrors.auth = '';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      // Redirect to signed-in app
      handleLogin();
      navigate('/');
    }
  };

  useEffect(() => {});

  return (
    <div className="px-8 md:px-0 pt-24 mx-auto max-w-lg h-screen flex flex-col">
      <img className="mb-8" width="45" height="45" src={RainbowLogo} />
      <h1 className="text-3xl font-bold mb-4">Login to Hack the North</h1>
      <p className="text-gray-300 pb-10 text-lg">
        Dream big and build alongside 1000+ hackers at Canada&apos;s biggest hackathon.
      </p>
      <form>
        <Input
          label="Email"
          placeholder="you@email.com"
          name="email"
          type="text"
          error={errors.email}
          onChange={handleInputChange}></Input>
        <div height="16px" display="block" className="h-4"></div>
        <Input
          label="Password"
          placeholder="•••••••••••••"
          name="password"
          type="password"
          error={errors.password}
          onChange={handleInputChange}></Input>
        <div className="py-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            className="text-sky-400 text-lg underline hover:no-underline">
            Forgot your password?
          </a>
        </div>
        {errors.auth && <div className="text-base text-red-400 mb-1">{errors.auth}</div>}
        <button
          className="w-full text-lg font-bold bg-sky-400 rounded-md hover:bg-sky-600 px-3.5 py-4 ease-in-out duration-200"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
