import {
  writable,
  derived
} from "svelte/store"
import store from "./globalStore";
const cart = writable(getStorageCart());
// cart total
export const cartTotal = derived(cart, ($cart) => {
  let total = $cart.reduce((acc, curr) => {
    return (acc += curr.amount * curr.price);
  }, 0);
  return parseFloat(total.toFixed(2))
})
// local function
const remove = (id, items) => {
  return items.filter(item => item.id !== id)
}
const toggleAmount = (id, items, action) => {
  return items.map(item => {
    let newAmount;
    if (action === "inc") {
      newAmount = item.amount + 1
    } else if (action === "dec") {
      newAmount = item.amount - 1
    } else {
      newAmount = item.amount
    }
    return item.id === id ? {
      ...item,
      amount: newAmount
    } : {
      ...item
    }
  })
}
// global function
export const removeItem = id => {
  cart.update(storeValue => {
    return remove(id, storeValue)
  })
}
export const increaseAmount = id => {
  cart.update(storeValue => {
    return toggleAmount(id, storeValue, "inc")
  })
}
export const decreaseAmount = (id, amount) => {
  cart.update(storeValue => {
    let cart;
    if (amount === 1) {
      cart = remove(id, storeValue);
    } else {
      cart = toggleAmount(id, storeValue, "dec");
    }
    return [...cart];
  });
};
export const addToCart = (id, product) => {
  cart.update(storeValue => {
    let item = storeValue.find(item => item.id === id)
    let cart = storeValue
    if (item) {
      cart = toggleAmount(id, storeValue, "inc")
    } else {
      const {
        id,
        image,
        title,
        price
      } = product;
      let newItem = {
        id,
        image,
        title,
        price,
        amount: 1
      }
      console.log(...storeValue)
      cart = [...storeValue, newItem];
      console.log(cart)
    }
    return [...cart]
  })
}
// localstorage
function getStorageCart() {
  return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}
export function setStorageCart(cartValues) {
  localStorage.setItem("cart", JSON.stringify(cartValues))
}
export default cart