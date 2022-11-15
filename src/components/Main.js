import mbtoken from "../assets/mbtoken.svg";
import mm from "../assets/metamask.svg";
import opensea from "../assets/opensea.svg";
import ctaNFT from "../assets/groupedcta.svg";
import { collections } from "../HomeNFTStore";
import NFTCard from "./NFTCard";

const Main = () => {
  return (
    <main>
      <div className="division">
        <img src={mbtoken} alt="" />
        <img src={mm} alt="" />
        <img src={opensea} alt="" />
      </div>

      <div className="gallery-container">
      <h2>Inspiration for your next adventure</h2>
      <div id="gallery">
        {collections.map((collection) => {
          return <NFTCard key={collection.key} nft={collection.img} />;
        })}
      </div>
    </div>

      <div id="cta">
        <div className="image-cta">
          <img src={ctaNFT} alt="" />
        </div>
        <div className="text-cta">
          <h3>Metabnb NFTs</h3>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
