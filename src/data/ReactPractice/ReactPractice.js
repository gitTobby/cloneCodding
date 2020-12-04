import React, { useState, useEffect } from "react";
import { Fragment } from "react";

const ReactPractice = () => {
    const [funcShow, setFuncShow] = useState(true);
    const [classShow, setClassShow] = useState(true);

    const handleRemoveFunc = () => {
        setFuncShow(false);
    } 
    const handleRemoveClass = () => {
        setClassShow(false);
    }

    return (
        <div className="container">
            <h1>Compare Func Component width Class Component</h1>
            <input type="button" value="remove func" onClick={() => handleRemoveFunc()}></input>
            <input type="button" value="remove class" onClick={() => handleRemoveClass()}></input>
            {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
            {classShow ? <ClassComp initNumber={2} ></ClassComp> : null}
        </div>
    );
}

var funcStyle = 'color: deepskyblue';
var funcId = 0;

const FuncComp = (props) => {
    const [number, setNumber] = useState(props.initNumber);
    const [date, setDate] = useState((new Date()).toString());

    const handleRandom = () => {
        setNumber(Math.random());
    } 
    const handleDate = () => {
        setDate((new Date()).toString());
    }

    //side effect
    useEffect(function(){
        console.log('%cfunc => useEffect (componentDidMount)' + (++funcId), funcStyle);
        //document.title = number + ' : ' + date;
        return function() {     // clean up
            console.log('%cfunc => useEffect return (componentWillUnmount)' + (++funcId), funcStyle);
        } 
    }, [number]);

    useEffect(function(){
        console.log('%cfunc => useEffect Number (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
        //document.title = number + ' : ' + date;
        return function() {     // clean up
            console.log('%cfunc => useEffect Number return (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
        } 
    }, [number]);

    useEffect(function(){
        console.log('%cfunc => useEffect Date (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
        //document.title = number + ' : ' + date;
        return function() {     // clean up
            console.log('%cfunc => useEffect Date return (componentDidMount & componentDidUpdate)' + (++funcId), funcStyle);
        }
    }, [date]);

    console.log('%cfunc => render' + (++funcId), funcStyle);

    return (
        <Fragment>
            <div className="container">
                <h2>Function Style Component</h2>
                <p>Number: {number}</p>
                <p>Date: {date}</p>
            </div>
            <input type="button" value="random" onClick={() => handleRandom()}></input>
            <input type="button" value="date" onClick={() => handleDate()}></input>
        </Fragment>
    );
}
 
var classStyle = 'color: deeppink';

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        console.log(constructor);
    }

    state = {
        number: this.props.initNumber,
        date: (new Date()).toString(),
    }

    componentWillMount() {
        console.log('%cclass => componentWillMount', classStyle);
    }
    componentDidMount() {
        console.log('%cclass => componentDidMount', classStyle);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('%cclass => shouldComponentUpdate', classStyle);
    // }
    componentWillUpdate(nextProps, nextState) {
        console.log('%cclass => componentWillUpdate', classStyle);
    }
    componentDidUpdate(nextProps, nextState) {
        console.log('%cclass => componentDidUpdate', classStyle);
    }
    componentWillUnmount() {
        console.log('%cclass => componentWillUnmount', classStyle);
    }


    handleRandom = () => {
        this.setState({number:Math.random()});
    } 
    handleDate = () => {
        this.setState({date:(new Date()).toString()});
    } 


    render() {
        return (
            <Fragment>
                <div className="container">
                    <h2>Class Style Component</h2>
                    <p>Number: {this.state.number}</p>
                    <p>Date: {this.state.date}</p>
                </div>
                <input type="button" value="random" onClick={this.handleRandom}></input>
                <input type="button" value="date" onClick={this.handleDate}></input>
            </Fragment>
        );
    }
}

export default ReactPractice;