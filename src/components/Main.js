import ctaNFT from "../assets/groupedcta.svg";

const Main = () => {
  return (
    <main>
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
          <button>Learn more</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
