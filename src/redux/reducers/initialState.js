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

  category: {
    error: null,
    loading: false,
    deleteCategory: {
      error: null,
      loading: false,
    },
  },

  cart: {
    items: [],
    totalToPay: 0,
  },
};
