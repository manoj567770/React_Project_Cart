export const addItemHandler = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD-ITEM",
      payload: {
        item: item,
      },
    });
  };
};

export const removeItemHandler = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE-ITEM",
      payload: {
        id: id,
      },
    });
  };
};

export const clearCartHandler = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR-CART",
    });
  };
};
