import React from "react";
import {Switch, Route} from "react-router";
import TestComponent1 from "./components/TestComponent1"
import TestComponent2 from "./components/TestComponent2";
import TestHome from "./components/TestHome";
import Career from './components/Career';
import Event from "./components/Events";
import Classes from"./components/Classes";
import Contact from './components/Contact'
import ClassDetail from "./components/ClassDetail";


const Router = () => {
    return (
        <Switch>
        <Route exact path="/" component={TestHome} />
        <Route exact path="/Test1" component={TestComponent1} />
        <Route exact path="/Test2" component={TestComponent2} />
        <Route exact path="/Career" component={Career} />
        <Route exact path="/Event" component={Event} />
        <Route exact path="/Classes" component={Classes} />
        <Route exact path="/Career" component={Contact} />
        <Route exact path="/ClassDetail" component={ClassDetail} />
        </Switch>
    )
}

export default Router; 
