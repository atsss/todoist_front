import { useState } from "react";
import { createContainer } from "unstated-next";

import axios from "axios";
import { AUTH_ENDPOINT } from "../variables/endpoint";
import { CLIENT, UID, ACCESS_TOKEN } from "../variables/localStrageKey";

function useSession(initialState = false) {
  const [isLogin, setSession] = useState(initialState);
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

  return { isLogin, login, logout };
}

export const SessionContainer = createContainer(useSession);
