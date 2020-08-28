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
    const res = await firestore.collection("invetory").doc(userId).get();
    const { name } = data;

    // count numverOf Items
    let numberOfitems = 0;
    console.log(res.data().products);

    res
      .data()
      .products.forEach((product) =>
        product.category.toUpperCase() === name.toUpperCase()
          ? numberOfitems++
          : numberOfitems
      );

    const newCategory = {
      id: new Date().valueOf(),
      name,
      totalItems: numberOfitems,
    };

    if (!res.data().categories) {
      firestore
        .collection("invetory")
        .doc(userId)
        .update({
          categories: [newCategory],
        });
    } else {
      firestore
        .collection("invetory")
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
    const res = await firestore.collection("invetory").doc(userId).get();

    const categories = res.data().categories;

    const index = categories.findIndex((item) => item.id === data.id);
    const { name, totalItems } = data;
    categories[index] = {
      id: categories[index].id,
      name,
      totalItems,
    };

    await firestore.collection("invetory").doc(userId).update({
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
    const res = await firestore.collection("invetory").doc(userId).get();
    const previousCategories = res.data().categories;
    const newCategories = previousCategories.filter(
      (category) => category.id !== id
    );
    await firestore.collection("invetory").doc(userId).update({
      categories: newCategories,
    });
    dispatch({ type: actions.DELETE_CATEGORY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.DELETE_CATEGORY_FAIL, payload: err.message });
  }
};

//Set categories
export const setCategories = (items) => ({
  type: actions.SET_CATEGORIES,
  payload: items,
});
