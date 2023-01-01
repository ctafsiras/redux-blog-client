import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  // const selectedProduct = state.cart.find(
  //   (product) => product._id === action.payload._id
  // );

  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_CONTENT:
      return {
        ...state,
        posts: state.products.filter(
          (post) => post._id !== action.payload
        ),
      };
    // case ADD_TO_CART:
    //   if (selectedProduct) {
    //     const newCart = state.cart.filter(
    //       (product) => product._id !== selectedProduct._id
    //     );

    //     selectedProduct.quantity = selectedProduct.quantity + 1;

    //     return {
    //       ...state,
    //       cart: [...newCart, selectedProduct],
    //     };
    //   }
    //   return {
    //     ...state,
    //     cart: [...state.cart, { ...action.payload, quantity: 1 }],
    //   };
    // case REMOVE_FROM_CART:
    //   if (selectedProduct.quantity > 1) {
    //     const newCart = state.cart.filter(
    //       (product) => product._id !== selectedProduct._id
    //     );
    //     selectedProduct.quantity = selectedProduct.quantity - 1;

    //     return {
    //       ...state,
    //       cart: [...newCart, selectedProduct],
    //     };
    //   }
    //   return {
    //     ...state,
    //     cart: state.cart.filter(
    //       (product) => product._id !== action.payload._id
    //     ),
    //   };

    case UPDATE_CONTENT:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
