import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {planets} from './pages/planets';
import { spaceships } from "./pages/spaceships";
import { films } from "./pages/films";

export const Routes = () => {
return (
    <Router>
        <Switch>
            <Route path="/" exact>
               <Redirect to="/planets"/>
            </Route>
            <Route path="/planets" exact>
            <planets/>
            </Route>
            <Route path="/spaceships">
                <spaceships/>
            </Route>
            <Route path="/films">
                <films/>
            </Route>
        </Switch>
    </Router>
)
}