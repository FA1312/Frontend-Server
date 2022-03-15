import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import '../css/app.css';
import { AiOutlineLogout } from 'react-icons/ai';
import { GiHeartEarrings } from 'react-icons/gi';
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
          <span className="addicon">
            <GiHeartEarrings />{' '}
          </span>
          <div className="welcomeName">
            <Link to="/">
              <button>
                <strong>Welcome {user && user.name} to the store </strong>
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
      </div>
    </nav>
  );
}

export default Navbar;
