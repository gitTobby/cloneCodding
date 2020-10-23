import React from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom"
import FoodILike from './data/Food'
import Counter from './data/Counter'
import Lifecircle from './data/Lifecircle'

const Contents = () => {
    return (
        <Fragment>
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/Food" component={FoodILike} />
                <Route path="/Counter" component={Counter} />
                <Route path="/Lifecircle" component={Lifecircle} />
            </Switch>
        </Fragment>
    );
}

export default Contents;