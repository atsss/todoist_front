import React, { useEffect } from "react";
import { SessionContainer } from "./containers";
import Routes from "./config/Routes";

// utility stayles
import "./App.sass";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

const App = () => {
  const session = SessionContainer.useContainer();

  useEffect(() => session.checkLogin(), []);

  if (!session.isChecked) {
    return <p>Loading</p>;
  }

  return <Routes />;
};

export default App;
