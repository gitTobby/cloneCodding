import React from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom"
import FoodILike from './data/Food'
import Counter from './data/Counter'

const Contents = () => {
    return (
        <Fragment>
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route path="/Food" component={FoodILike} />
                <Route path="/Counter" component={Counter} />
            </Switch>
        </Fragment>
    );
}

export default Contents;