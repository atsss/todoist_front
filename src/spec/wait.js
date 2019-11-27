import { act } from "react-dom/test-utils";
import wait from "waait";

export const actWait = async (amount = 0) => {
  await act(async () => await wait(amount));
};

export const updateWrapper = async (wrapper, amount = 0) => {
  await actWait(amount);

  return wrapper.update();
};
