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
          <icons>
            <CgMail />
          </icons>
        </a>
        <a href="https://www.facebook.com/faldrovandi" className="facebook social">
          <icons>
            <BsFacebook />
          </icons>
        </a>
        <a href="https://www.instagram.com/marienkasunshine/" className="instagram social">
          <icons>
            <RiInstagramFill />
          </icons>
        </a>
        <a href="https://github.com/FA1312" className="github social">
          <icons>
            <AiFillGithub />
          </icons>
        </a>
      </div>
      <div className="back-home">
        <Link to={'/'}>
          <button>Homepage </button>{' '}
          <icons className="addicon">
            <FcHome />
          </icons>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
