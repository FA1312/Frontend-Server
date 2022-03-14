import { Link } from 'react-router-dom';
import '../css/app.css';
import { FcHome } from 'react-icons/fc';
import { CgMail } from 'react-icons/cg';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <div className="footer">
      <div className="social-container">
        <a href="mailto:meraki.slowcrafts.info@gmail.com" className="gmail social">
          <span>
            <CgMail />
          </span>
        </a>
        <a href="https://www.facebook.com/faldrovandi" className="facebook social">
          <span>
            <BsFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/marienkasunshine/" className="instagram social">
          <span>
            <RiInstagramFill />
          </span>
        </a>
        <a href="https://github.com/FA1312" className="github social">
          <span>
            <AiFillGithub />
          </span>
        </a>
      </div>
      <div className="back-home">
        <Link to={'/'}>
          <button>Homepage </button>{' '}
          <span className="addicon">
            <FcHome />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
