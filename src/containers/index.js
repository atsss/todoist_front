import { useState } from "react";
import { createContainer } from "unstated-next";

function useSession(initialState = false) {
  let [isLogin, setSession] = useState(initialState);
  let login = () => setSession(true);
  let logout = () => setSession(false);
  return { isLogin, login, logout };
}

export const SessionContainer = createContainer(useSession);
