import { useState } from "react";
import Modal from "../../UI/Modal";

const ListItems = ({ data, onAdd, onRemove }) => {
  const [counter, counterSet] = useState(0);
  const [showModal, setshowModal] = useState(false);

  const increaseCounterByOne = (event) => {
    event.stopPropagation();
    onAdd(data.id);
    counterSet(counter + 1);
  };
  const decreaseCounterByOne = (event) => {
    event.stopPropagation();
    if (counter === 0) {
      return;
    }
    if (counter === 1) {
      onRemove(data.id);
    }
    counterSet(counter - 1);
  };

  const handleModal = () => {
    setshowModal((previousState) => !previousState);
  };
  return (
    <>
      <div onClick={handleModal} className={"item-card"}>
        <img
          className={"img-fluid"}
          src="/assets/placeholder.png"
          alt={data.title}
        />
        <div className={"item-card__information"}>
          <div className={"pricing"}>
            <span>₹{data.discountedPrice}</span>
            <small>
              <strike>₹{data.price}</strike>
            </small>
          </div>
          <div className={"title"}>
            <h3>{data.title}</h3>
          </div>
        </div>

        {counter < 1 ? (
          <button className={"cart-add"} onClick={increaseCounterByOne}>
            <span>Add to cart</span>
            {/*<img src={AddToCartIcon} alt="Cart-Icon"/>*/}
          </button>
        ) : (
          <div className={"cart-addon"}>
            <button onClick={decreaseCounterByOne}>
              <span>-</span>
            </button>
            <span>{counter}</span>
            <button onClick={increaseCounterByOne}>
              <span>+</span>
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <Modal onClose={handleModal}>
          <div className="item-card__modal">
            <div className="img-wrap">
              <img
                className={"img-fluid"}
                src="/assets/placeholder.png"
                alt={data.title}
              />
            </div>
            <div className="meta">
              <h3>{data.title}</h3>
              <div className={"pricing"}>
                <span>₹{data.discountedPrice}</span>
                <small>
                  <strike>₹{data.price}</strike>
                </small>
                <p>{data.description}</p>
                {counter < 1 ? (
                  <button className={"cart-add"} onClick={increaseCounterByOne}>
                    <span>Add to cart</span>
                    {/*<img src={AddToCartIcon} alt="Cart-Icon"/>*/}
                  </button>
                ) : (
                  <div className={"cart-addon"}>
                    <button onClick={decreaseCounterByOne}>
                      <span>-</span>
                    </button>
                    <span>{counter}</span>
                    <button onClick={increaseCounterByOne}>
                      <span>+</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default ListItems;
