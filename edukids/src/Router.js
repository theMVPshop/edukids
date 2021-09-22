import React from "react";
import {Switch, Route} from "react-router";
import TestComponent1 from "./components/TestComponent1"
import TestComponent2 from "./components/TestComponent2";
import TestHome from "./components/TestHome";


const Router = () => {
    return (
        <Switch>
        <Route path="/" component={TestHome} />
        <Route path="/Test1" component={TestComponent1} />
        <Route path="/Test2" component={TestComponent2} />
        </Switch>
    )
}

export default Router; 
