export const initialState = {
  cart: [],
  user: null,
};

export const subTotal = (cart) => cart?.reduce((acc, curr) => curr.price + acc, 0)


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

export default reducer;
