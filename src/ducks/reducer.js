const initialState = {
  first_name: '',
  last_name: '',
  username: '',
  auth_id: '',
  name: '',
  category: '',
  brand: '',
  price: '',
  description: '',
  size: '',
  imgUrl: '',
  fulfilled: '',
  total: 0,
  paid: '',
  allItems: [],
  cart: [],
  id: 0,
  orders: []

}

const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const SET_USER = "SET_USER";
const GET_ALL_ORDERS = "GET_ALL_ORDERS";

export function getAllItems(items) {
  return {
    type: GET_ALL_ITEMS,
    payload: items
  }
}
export function addProductToCart(val) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: val
  }
}
export function setUser(val) {
  return {
    type: SET_USER,
    payload: val
  }
}
export function getAllOrders(user_id) {
  return {
    type: GET_ALL_ORDERS,
    payload: user_id
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return Object.assign({}, state, { allItems: action.payload })

    case ADD_PRODUCT_TO_CART:
      const newCart = state.cart.slice();
      newCart.push(action.payload);
      return Object.assign({}, state, { cart: newCart });

    case SET_USER:
      return Object.assign({}, state, action.payload)

    case GET_ALL_ORDERS:
      return Object.assign({}, state, { orders: action.payload })

    default:
      return state;
  }
}
