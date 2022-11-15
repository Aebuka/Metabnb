import groupedImgs from "../assets/groupedImgs.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
    <Navbar />
      <div id="intro">
        <div className="image-intro">
          <img src={groupedImgs} alt="" />
        </div>
        <div className="text-intro">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="searchbar">
            <input type="search" name="" id="" placeholder="Search for location" />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
