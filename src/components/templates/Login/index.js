import React, { useState } from "react";
import styles from "../../atoms/Input/styles.module.sass";
import Button from "../../atoms/Button";
import { SessionContainer } from "../../../containers/";
import { Mutation } from "react-apollo";
import { LOGIN_MUTATION } from "../../../queries";

const LoginTemplate = ({ className }) => {
  const [email, setEmail] = useState("lazy@example.com");
  const [password, setPassword] = useState("passpass");
  let session = SessionContainer.useContainer();

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={password}
          onChange={e => setEmail(e.target.password)}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        onCompleted={data => {
          if (data.signinUser == null) {
            return;
          }

          document.cookie = `token=${data.signinUser.token}`;
          session.login();
        }}
      >
        {loginMutation => <Button text="ログイン" onClick={loginMutation} />}
      </Mutation>
    </div>
  );
};

export default LoginTemplate;
