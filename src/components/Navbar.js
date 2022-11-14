// import { useState } from "react";
import logo from "../assets/groupedlogo.svg";

const Navbar = () => {
//   const [dropmenu, setDropmenu] = useState(false);

  // const dropmenu = () => {
  //   return <>
  //   <div id="menu">
  //     <a href="/">Home</a>
  //     <a href="/place-to-stay">Place to stay</a>
  //     <a href="/">NFTs</a>
  //     <a href="/">Community</a>
  //     <a href="/connect-wallet">Connect Wallet</a>
  //   </div>
  //   <button>Connect wallet</button>
  // </>
  // }

  const dropdown = () => {
    // setDropmenu(!dropmenu);
    console.log("clicked");
  };

  return (
    <div id="Navbar">
      <img src={logo} alt="" />
      <button onClick={dropdown}>Menu</button>
    </div>
  );
};

export default Navbar;
