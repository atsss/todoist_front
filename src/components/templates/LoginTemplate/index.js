import React, { useState } from "react";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import { WarningTxt } from "../../atoms/Txt";
import Input from "../../molecules/inputs/Text";
import { SessionContainer } from "../../../containers/";

const LoginTemplate = ({ className }) => {
  const [email, setEmail] = useState("test01@example.com");
  const [password, setPassword] = useState("passpass");
  const [message, setMessage] = useState(null);
  const session = SessionContainer.useContainer();

  return (
    <section className="section">
      <div className="container">
        <Heading level={1}>ログイン</Heading>

        {message && <WarningTxt className="u-mt10">{message}</WarningTxt>}

        <Input
          label="メールアドレス"
          value={email}
          onChange={setEmail}
          placeholder="test01@export.com"
        />
        <Input
          label="パスワード"
          value={password}
          onChange={setPassword}
          placeholder="passpass"
        />

        <Button
          text="ログイン"
          onClick={() => session.login({ email, password, setMessage })}
          className="u-mt10"
        />
      </div>
    </section>
  );
};

export default LoginTemplate;
