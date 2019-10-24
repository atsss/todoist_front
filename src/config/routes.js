import React from "react";
import { Switch, Route } from "react-router-dom";
import TaskIndexPage from "../components/pages/TaskIndexPage";
import TaskNewPage from "../components/pages/TaskNewPage";
import TaskEditPage from "../components/pages/TaskEditPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TaskIndexPage} />
    <Route exact path="/tasks/new" component={TaskNewPage} />
    <Route exact path="/tasks/:id/edit" component={TaskEditPage} />
  </Switch>
);

export default Routes;
