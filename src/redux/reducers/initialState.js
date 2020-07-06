export default {
  auth: {
    error: null,
    loading: false,
    verifyEmail: {
      error: null,
      loading: false,
    },
    recoverPassword: {
      error: null,
      loading: false,
    },
    profileEdit: {
      error: null,
      loading: false,
    },
    deleteUser: {
      loading: false,
      error: null,
    },
  },
  product: {
    error: null,
    loading: false,
    deleteProduct: {
      error: null,
      loading: false,
    },
  },

  categories: [
    {
      id: 1,
      name: "category1",
      totaleItems: 10,
    },
    {
      id: 2,
      name: "category2",
      totaleItems: 20,
    },
    {
      id: 3,
      name: "category3",
      totaleItems: 5,
    },
  ],
  cart: {
    items: [],
    totalToPay: 0,
  },
};
