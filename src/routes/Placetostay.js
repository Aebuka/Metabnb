import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collections2 } from "../NFTStore";
import NFTCard from "../components/NFTCard";
import filterIcon from "../assets/setting.png"

const Placetostay = () => {
  return (
    <div>
      <Navbar />

      <div className="filterFeature">
        <a href="/">Restaurant</a>
        <a href="/">Cottage</a>
        <a href="/">Castle</a>
        <a href="/">fantast city</a>
        <a href="/">beach</a>
        <a href="/">Carbins</a>
        <a href="/">Off-grid</a>
        <a href="/">Farm</a>
        <a href="/">Location <img src={filterIcon} alt="" /></a>
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
