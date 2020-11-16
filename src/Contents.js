import React from "react";
// import { Fragment } from "react";
import { Route, Switch } from "react-router-dom"
import FoodILike from './data/Food'
import Counter from './data/Counter'
import Lifecircle from './data/Lifecircle'
import Lorder from './data/Lorder'
import Movies from './data/Movies'
import Events from './data/Events'

const Contents = () => {
    return (
        <Switch>
            <Route exact path="/" component={FoodILike} />
            <Route path="/Food" component={FoodILike} />
            <Route path="/Counter" component={Counter} />
            <Route path="/Lifecircle" component={Lifecircle} />
            <Route path="/Lorder" component={Lorder} />
            <Route path="/Movies" component={Movies} />
            <Route path="/Events" component={Events} />
        </Switch>
    );
}

export default Contents;