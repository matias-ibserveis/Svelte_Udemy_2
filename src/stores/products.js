import {
  writable,
  derived
} from "svelte/store";
import URL from "../strapi/URL";
import getProducts from "../strapi/getProducts"
import localProducts from "../localProducts"
const store = writable([], () => {
  setProducts()
  return () => {}
});

async function setProducts() {
  let products = await getProducts()
  console.log(products)
  if (products) {
    products = flattenProducts(products)
    store.set(products)
  }
}

// subscribe
// set
// update

//flatten products
function flattenProducts(data) {
  return data.map(item => {
    let image = item.image[0].url; 
   /*  let image = URL + item.image[0].url */
    return {
      ...item,
      image
    };
  });
}
//feactured store
export const featuredStore = derived(store, ($featured) => {

  return $featured.filter(item => item.featured === true)
})
export default store;