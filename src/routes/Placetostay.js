import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collections2 } from "../NFTStore";
import NFTCard from "../components/NFTCard";
import filterIcon from "../assets/setting.png";

const Placetostay = () => {
  return (
    <div>
      <Navbar />

      <div className="filterFeature-Container">
        <select className="filterFeature">
          <option>Restaurant</option>
          <option>Cottage</option>
          <option>Castle</option>
          <option>fantast city</option>
          <option>beach</option>
          <option>Carbins</option>
          <option>Off-grid</option>
          <option>Farm</option>
        </select>
        <span>
          Location <img src={filterIcon} alt="" />
        </span>
      </div>

      <div id="gallery">
        {collections2.map((collection) => {
          return <NFTCard key={collection.key} nft={collection.img} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Placetostay;
