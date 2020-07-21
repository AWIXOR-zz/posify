import * as actions from "./actionTypes";
import moment from "moment";

// Add SALES
export const addSales = (totalSales) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_SALES_START });
  try {
    const res = await firestore.collection("invetory").doc(userId).get();
    const date = moment().format("dddd D MMM YYYY");

    const newSales = {
      id: new Date().valueOf(),
      date: date,
      totalSales,
    };
    let dayExist = false;

    if (!res.data().sales) {
      firestore
        .collection("invetory")
        .doc(userId)
        .update({
          sales: [newSales],
        });
    } else {
      res
        .data()
        .sales.forEach((item) =>
          item.date === date ? (dayExist = true) : null
        );
      if (dayExist) {
        const sales = res.data().sales;

        const index = sales.findIndex((item) => item.date === date);
        sales[index] = {
          id: sales[index].id,
          date: sales[index].date,
          totalSales: sales[index].totalSales + totalSales,
        };
        await firestore.collection("invetory").doc(userId).update({
          sales,
        });
      } else {
        firestore
          .collection("invetory")
          .doc(userId)
          .update({
            sales: [...res.data().sales, newSales],
          });
      }
    }
    dispatch({ type: actions.ADD_SALES_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_SALES_FAIL, payload: err.message });
  }
};
