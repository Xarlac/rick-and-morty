import { FC } from "react";
import { DashboardContainer } from "../dashboard";
import { HeaderContainer } from "../header";
import { CharacterCardDetails } from "../characterCard/CharacterCardDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Main: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderContainer />
          <DashboardContainer />
        </Route>
        <Route path="/details">
          <HeaderContainer />
          <CharacterCardDetails />
        </Route>
      </Switch>
    </Router>
  );
};
