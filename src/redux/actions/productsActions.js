import * as actions from "./actionTypes";

// Add product
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

// Edit product
export const editProduct = (data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_PRODUCT_START });
  try {
    const res = await firestore.collection("products").doc(userId).get();
    const products = res.data().product;

    const index = products.findIndex((item) => item.id === data.id);

    products[index].product = data;

    await firestore.collection("products").doc(userId).update({
      product: products,
    });
    dispatch({ type: actions.ADD_PRODUCT_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_PRODUCT_FAIL, payload: err.message });
  }
};

// Delete product
export const deleteProduct = (id) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.DELETE_PRODUCT_START });
  try {
    const res = await firestore.collection("products").doc(userId).get();
    const previousProducts = res.data().product;
    const newProducts = previousProducts.filter((product) => product.id !== id);
    await firestore.collection("products").doc(userId).update({
      product: newProducts,
    });
    dispatch({ type: actions.DELETE_PRODUCT_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.DELETE_PRODUCT_FAIL, payload: err.message });
  }
};
