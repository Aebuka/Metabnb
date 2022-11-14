import logo from "../assets/groupedlogo.svg";
import fb from "../assets/facebook.svg";
import ig from "../assets/ig.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-and-socials">
          <h2>
            <img src={logo} alt="" />
          </h2>

          <a href="/">
            <img src={fb} alt="" />
          </a>
          <a href="/">
            <img src={ig} alt="" />
          </a>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div id="community">
          <h3>Community</h3>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div id="places">
          <h3>Places</h3>
          <p>Castle</p>
          <p>Farms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div id="about-us">
          <h3>About us</h3>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
      <p>© 2022 Metabnb</p>
    </footer>
  );
};

export default Footer;
