import moment from "moment";
import "moment/locale/ja";

const today = moment().format("MMMDo");
const timeFormat = ({ hour, minute }) =>
  moment({ hours: hour, minutes: minute }).format("LT");

export { today, timeFormat };
