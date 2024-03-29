import { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
{
  /*import { ImUserPlus } from 'react-icons/im';*/
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const requestBody = { email, password };

    login(requestBody)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <div className="login-container">
        <form onSubmit={handleLoginSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
          <br />
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {/*<p>Dont have an account yet?</p>
        <Link to={'/signup'}> Sign Up</Link>{' '}
        <icons className="addicon">
          <ImUserPlus />
        </icons>*/}
      </div>
    </div>
  );
}

export default LoginPage;
