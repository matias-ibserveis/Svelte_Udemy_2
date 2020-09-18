import {
  writable,
  derived
} from "svelte/store";
import localProducts from "../localProducts";
const store = writable([...localProducts]);

// subscribe
// set
// update

//flatten products

//feactured store
export const featuredStore = derived(store, ($featured) => {

  return $featured.filter(item => item.featured === true)
})
export default store;