import {
  writable
} from "svelte/store"
import moment from "moment";
import "moment/locale/es";

const globalStore = writable({
  sidebar: false,
  cart: false,
  alert: false,
  alertText: "defaultText",
  alertDanger: false,
  diaHoy: moment().date(),
  mes: moment().month() + 1,
  año: moment().year(),
})

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item, value, alertText, alertDanger = false) => {
    if (item === "alert") {
      globalStore.update(storeValues => {
        return {
          ...storeValues,
          [item]: value,
          alertText,
          alertDanger
        }
      })
    }
    globalStore.update(storeValues => {
      return {
        ...storeValues,
        [item]: value
      }
    })
  }
}

export default store