import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import '../css/app.css';
import { AiOutlineLogout } from 'react-icons/ai';
import { GiHeartEarrings } from 'react-icons/gi';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="welcomebar">
        <section>
          <h1>MERAKI</h1>
          <icons className="addicon">
            <GiHeartEarrings />{' '}
          </icons>
          <div className="welcomeName">
            <Link to="/">
              <button>
                <strong>Hey, take a look at my items {user && user.name} </strong>
              </button>
            </Link>
          </div>
        </section>
        <div>
          {isLoggedIn && (
            <div className="anotheruser">
              <small>
                Are you another user?
                <button onClick={logOutUser}>
                  <AiOutlineLogout />
                </button>
              </small>
            </div>
          )}
        </div>
        <div className="login">
          {!isLoggedIn && (
            <>
              <Link to="/signup">
                {' '}
                <button>Sign Up</button>{' '}
              </Link>
              <Link to="/login">
                {' '}
                <button>Login</button>{' '}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
