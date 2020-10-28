import React from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom"
import FoodILike from './data/Food'
import Counter from './data/Counter'
import Lifecircle from './data/Lifecircle'
import Lorder from './data/Lorder'
import Movies from './data/Movies'

const Contents = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/Food" component={FoodILike} />
                <Route path="/Counter" component={Counter} />
                <Route path="/Lifecircle" component={Lifecircle} />
                <Route path="/Lorder" component={Lorder} />
                <Route path="/Movies" component={Movies} />
            </Switch>
        </Fragment>
    );
}

export default Contents;