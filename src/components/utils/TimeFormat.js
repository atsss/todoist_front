import moment from "moment";
import "moment/locale/ja";

const today = moment().format("MMMDo");
const timeFormat = dateTime => moment(dateTime).format("LT");

export { today, timeFormat };
