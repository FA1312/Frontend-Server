import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import '../css/app.css';
import { AiOutlineLogout } from 'react-icons/ai';
import { FcPlus } from 'react-icons/fc';
import { RiLoginCircleFill } from 'react-icons/ri';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="welcomebar">
        <section>
          <h1>M E R A K I</h1>

          <div className="welcomeName">
            <Link to="/">
              <button>Welcome to the store {user && user.name}</button>
            </Link>
          </div>

          <div>
            {isLoggedIn && (
              <div className="anotheruser">
                <p>
                  Are you another user?
                  <button className="logout" onClick={logOutUser}>
                    <AiOutlineLogout />
                  </button>
                </p>
              </div>
            )}
          </div>
          <div className="login">
            {!isLoggedIn && (
              <>
                <Link to="/signup">
                  {' '}
                  <button>Sign Up</button>
                  <span className="addicon">
                    <FcPlus />
                  </span>
                </Link>

                <Link to="/login">
                  {' '}
                  <button>Login</button>{' '}
                  <span className="addicon">
                    <RiLoginCircleFill />
                  </span>
                </Link>
              </>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
