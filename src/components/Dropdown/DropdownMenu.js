import { useState, useRef } from "react";
import "../Dropdown/DropdownMenu.css"

const DropDownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button onClick={onClick} className=" btn menu-trigger">
        Menu
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <a href="/">Home</a>
        <a href="/place-to-stay">Place to stay</a>
        <a href="/">NFTs</a>
        <a href="/">Community</a>
        <a href="/connect-wallet">Connect Wallet</a>
      </nav>
    </div>
  );
};

export default DropDownMenu;
