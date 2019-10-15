import { useState } from "react";
import { createContainer } from "unstated-next";

import axios from "axios";
import { AUTH_ENDPOINT } from "../variables/endpoint";
import { CLIENT, UID, ACCESS_TOKEN } from "../variables/localStrageKey";

const useSession = (initialState = false) => {
  const [isLogin, setSession] = useState(initialState);
  const [isChecked, setCheck] = useState(initialState);

  const login = (email, password, setMessage) => {
    return axios
      .post(AUTH_ENDPOINT, { email, password })
      .then(response => {
        const { headers } = response;
        const { client, uid } = headers;

        localStorage.setItem(CLIENT, client);
        localStorage.setItem(UID, uid);
        localStorage.setItem(ACCESS_TOKEN, headers["access-token"]);

        setSession(true);
      })
      .catch(error => setMessage(error.response.data.errors[0]));
  };
  const logout = () => {
    localStorage.removeItem(CLIENT);
    localStorage.removeItem(UID);
    localStorage.removeItem(ACCESS_TOKEN);

    setSession(false);
  };
  const checkLogin = () => {
    if (
      localStorage.getItem(CLIENT) &&
      localStorage.getItem(UID) &&
      localStorage.getItem(ACCESS_TOKEN)
    ) {
      setCheck(true);
      setSession(true);
    }

    setCheck(true);
  };

  return { isLogin, login, logout, checkLogin, isChecked };
};

export const SessionContainer = createContainer(useSession);
