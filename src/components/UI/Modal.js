import ReactDOM from "react-dom";
import { Backdrop } from "./Loader";
const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop onClose={onClose} />
          <div className="modal">
            <button type="close" onClick={onClose}>
              x
            </button>
            <div className="content">{children}</div>
          </div>
        </>,
        document.getElementById("modal-root")
      )}
    </>
  );
};
export default Modal;
