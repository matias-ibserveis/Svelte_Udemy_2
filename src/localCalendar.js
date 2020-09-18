import moment from "moment";
import "moment/locale/es";
export default [{
  id: 1,
  diaHoy: moment().date(),
  mes: moment().month() + 1,
  año: moment().year(),
  dia_semana: moment().day()
}]