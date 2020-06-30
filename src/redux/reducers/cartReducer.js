import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const cartReducer = (state = initialState.cart, { type, payload, id }) => {
  switch (type) {
    case actions.ADD_TO_CART:
      return produce(state, (draft) => {
        const index = draft.items.findIndex((item) => item.id === payload.id);
        if (index !== -1) {
          draft.items[index].Qte += payload.Qte;
          draft.totalToPay = calculateTotal(draft);
        } else {
          draft.items.push({
            id: payload.id,
            name: payload.name,
            price: payload.price,
            Qte: payload.Qte,
          });
          draft.totalToPay = calculateTotal(draft);
        }
      });
    case actions.REMOVES_FROM_CART:
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex((item) => item.id === id);
        draft.items.splice(itemIndex, 1);
        draft.totalToPay = calculateTotal(draft);
      });

    default:
      return state;
  }
};
const calculateTotal = (state) => {
  return state.items.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.Qte * cartItem.price,
    0
  );
};
export default cartReducer;
