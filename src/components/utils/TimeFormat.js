import moment from "moment";
import "moment/locale/ja";

const today = moment().format("MMMDo");

export { today };
