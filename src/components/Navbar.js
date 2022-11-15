import logo from "../assets/groupedlogo.svg";
import DropDownMenu from "./Dropdown/DropdownMenu";

const Navbar = () => {
  return (
    <div id="Navbar">
      <img src={logo} alt="" />

      <div id="menu">
        <a href="/">Home</a>
        <a href="/place-to-stay">Place to stay</a>
        <a href="/">NFTs</a>
        <a href="/">Community</a>
      </div>
      <div id="menu-btn" className="btn">
        <a href="/connect-wallet">Connect Wallet</a>
      </div>

      <DropDownMenu />
    </div>
  );
};

export default Navbar;
