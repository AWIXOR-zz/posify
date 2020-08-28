import * as actions from "./actionTypes";

// Initialise database
export const initializeDatabase = () => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actions.INITIALISE_DATABASE_START });
  const res = await firestore.collection("invetory").doc(userId).get();
  try {
    if (!res.data()) {
      firestore.collection("invetory").doc(userId).set({
        products: [],
        categories: [],
        sales: [],
      });
    }
    dispatch({ type: actions.INITIALISE_DATABASE_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.INITIALISE_DATABASE_FAIL, payload: err.message });
  }
};
