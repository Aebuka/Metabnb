import star from "../assets/starsvg.svg";

const NFTCard = ({nft}) => {
  return (
    <div className="NFT">
      <img src={nft} alt="" />
      <div className="card-details">
        <p>Desert king</p>
        <p><strong>1MBT per night</strong></p>
      </div>
      <div className="card-details">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <div className="rating">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
    </div>
  );
};

export default NFTCard;
