import React from "react";
// import { Fragment } from "react";
import { Route, Switch } from "react-router-dom"
import FoodILike from './data/Food'
import Counter from './data/Counter'
import Lifecircle from './data/Lifecircle'
import Lorder from './data/Lorder'
import Movies from './data/Movies'
import Events from './data/Events'
import ReactPractice from './data/ReactPractice'
import Finder from './data/Finder'
import CoinList from './data/CoinList'

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
            <Route path="/ReactPractice" component={ReactPractice} />
            <Route path="/Finder" component={Finder} />
            <Route path="/CoinList" component={CoinList} />
        </Switch>
    );
}

export default Contents;