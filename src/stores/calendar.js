import {
  writable,
  derived
} from "svelte/store"
import moment from "moment";
import "moment/locale/es";
import store from "./globalStore";
import localCalendar from "../localCalendar"
const calendar = writable([])



export const rangeCalendar = (año, mes, diahoy) => {

  let fecha = `${año}-${mes}-${diahoy}`
  let inicioMes = moment(fecha, "YYYY-M-D hh:mm:ss ").startOf("month");
  let finMes = moment(fecha, "YYYY-M-D hh:mm:ss ").endOf("month");
  return renderCalendar(fecha, inicioMes, finMes)
}

const configuracionFecha = (diaPalabra) => {
  switch (diaPalabra) {
    case 0:
      return "Lun";
      break;
    case 1:
      return "Mar";
      break;
    case 2:
      return "Mie";
      break;
    case 3:
      return "Jue";
      break;
    case 4:
      return "Vie";
      break;
    case 5:
      return "Sab";
      break;
    case 6:
      return "Dom";
      break;
    default:
      console.log("error");
  }

}

export const renderCalendar = (fecha, inicioMes, finMes) => {
  calendar.update(storeValue => {
    storeValue = []
/* REVISAR PARAMETRO ID CON FECHA (EVALUAR NO TENER PARAMETRO Y USAR UN MODAL) */
    for (var i = inicioMes.date(); i <= finMes.date(); i++) {
      let diaPalabra = configuracionFecha(inicioMes.day())
      console.log(diaPalabra)
      storeValue = [...storeValue, {
        id: fecha,
        dia_semana: diaPalabra,
        diaHoy: i,


      }]
      console.log(i)
      inicioMes.add(1, 'days');
    }
    return storeValue
  })
}


export default calendar;