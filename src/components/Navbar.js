import logo from "../assets/groupedlogo.svg";
import DropDownMenu from "./Dropdown/DropdownMenu";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <div id="Navbar">
      <img className="navbarImg" src={logo} alt="" />

      <div id="menu">
        <a href="/">Home</a>
        <a href="/place-to-stay">Place to stay</a>
        <a href="/">NFTs</a>
        <a href="/">Community</a>
      </div>
      <div id="menu-btn">
        <Modal />
      </div>

      <DropDownMenu />
    </div>
  );
};

export default Navbar;
