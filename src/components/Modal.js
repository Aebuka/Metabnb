import { useState } from "react";
import "../Modal.css";
import walletconnect from "../assets/bwalletconnect.svg";
import metamask from "../assets/bcoloredmm.svg";
import pointer from "../assets/arrowpointer.svg";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    setIsActive(!isActive);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Connect Wallet
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="modal-item top-item">
              <span>Connect Wallet</span>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
            <p className="modal-item">Choose your preffered wallet:</p>
            {/*  */}
            <div className="modal-item">
              <div className="modal-item-left">
                <img className="modal-item-img" src={metamask} alt="" />
                <span>MetaMask</span>
              </div>{" "}
              <img src={pointer} alt="" />
            </div>
            {/*  */}
            <div className="modal-item">
              <div className="modal-item-left">
                <img className="modal-item-img" src={walletconnect} alt="" />
                <span>WalletConnect</span>
              </div>{" "}
              <img src={pointer} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
