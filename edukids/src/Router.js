import React from "react";
import {Switch, Route} from "react-router";
import TestComponent1 from "./components/TestComponent1"
import TestComponent2 from "./components/TestComponent2";
import TestHome from "./components/TestHome";
import About from "./components/About";

const Router = () => {
    return (
        <Switch>
        <Route exact path="/" component={TestHome} />
        <Route exact path="/Test1" component={TestComponent1} />
        <Route exact path="/Test2" component={TestComponent2} />
        <Route exact path="/About" component={About} />
        </Switch>
    )
}

export default Router; 
