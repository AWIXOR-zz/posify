import * as actions from "./actionTypes";
// Add a product
export const addProduct = (data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_PRODUCT_START });
  try {
    const res = await firestore.collection("products").doc(userId).get();
    const newProduct = {
      id: new Date().valueOf(),
      product: data,
    };

    if (!res.data()) {
      firestore
        .collection("products")
        .doc(userId)
        .set({
          product: [newProduct],
        });
    } else {
      firestore
        .collection("products")
        .doc(userId)
        .update({
          product: [...res.data().product, newProduct],
        });
    }
    dispatch({ type: actions.ADD_PRODUCT_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_PRODUCT_FAIL, payload: err.message });
  }
};
