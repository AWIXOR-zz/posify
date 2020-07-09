import * as actions from "./actionTypes";

// Add category
export const addCategory = (data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_CATEGORY_START });
  try {
    const res = await firestore.collection("categories").doc(userId).get();
    const { name, totalItems } = data;

    const newCategory = {
      id: new Date().valueOf(),
      name,
      totalItems,
    };

    if (!res.data()) {
      firestore
        .collection("categories")
        .doc(userId)
        .set({
          categories: [newCategory],
        });
    } else {
      firestore
        .collection("categories")
        .doc(userId)
        .update({
          categories: [...res.data().categories, newCategory],
        });
    }
    dispatch({ type: actions.ADD_CATEGORY_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_CATEGORY_FAIL, payload: err.message });
  }
};

// Edit category
export const editCategory = (data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_CATEGORY_START });
  try {
    const res = await firestore.collection("categories").doc(userId).get();

    const categories = res.data().categories;

    const index = categories.findIndex((item) => item.id === data.id);
    const { name, totalItems } = data;
    categories[index] = {
      id: categories[index].id,
      name,
      totalItems,
    };

    await firestore.collection("categories").doc(userId).update({
      categories: categories,
    });
    dispatch({ type: actions.ADD_CATEGORY_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_CATEGORY_FAIL, payload: err.message });
  }
};

// Delete category
export const deleteCategory = (id) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.DELETE_CATEGORY_START });
  try {
    const res = await firestore.collection("categories").doc(userId).get();
    const previousCategories = res.data().categories;
    const newCategories = previousCategories.filter(
      (category) => category.id !== id
    );
    await firestore.collection("categories").doc(userId).update({
      categories: newCategories,
    });
    dispatch({ type: actions.DELETE_CATEGORY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.DELETE_CATEGORY_FAIL, payload: err.message });
  }
};
