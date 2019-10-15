import React, { useState } from "react";
import styles from "../../atoms/Input/styles.module.sass";
import Button from "../../atoms/Button";
import { SessionContainer } from "../../../containers/";

const LoginTemplate = ({ className }) => {
  const [email, setEmail] = useState("test12@example.com");
  const [password, setPassword] = useState("12345678");
  const [message, setMessage] = useState(null);
  const session = SessionContainer.useContainer();

  return (
    <div>
      <div>
        {message && <p>{message}</p>}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <Button
        text="ログイン"
        onClick={() => session.login(email, password, setMessage)}
      />
    </div>
  );
};

export default LoginTemplate;
