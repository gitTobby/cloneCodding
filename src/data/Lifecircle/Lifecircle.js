import React from "react";
import { Fragment } from "react";

class Lifecircle extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor: rendered')
    }

    componentDidMount() {
        console.log('DidMount: component rendered');
    }

    componentDidUpdate() {
        console.log('DidUpdate: component just updated');
    }

    componentWillUnmount() {
        console.log('Goodbye~!');
    }

    state = {
        count: 0,
    }

    add = () => {
        this.setState(current => ({
            count: this.state.count + 1,
        }));
    };

    minus = () => {
        this.setState(current => ({
            count: this.state.count - 1,
        }));
    }

    render() {
        console.log("Render: I'm rendering");
        return (
            <Fragment>
                <h1>The number is: {this.state.count}</h1>
                <button type="button" onClick={this.add}>Add</button>
                <button type="button" onClick={this.minus}>Minus</button>
                <br /><br /><br />
                <h3>[실행순서]</h3>
                <p>constructor() ==&gt; render() ==&gt; componentDidMount()</p>
                <p>setState() ==&gt; render() ==&gt; componentDidUpdate()</p>
                <br /><br />
                <p>[참고사항]</p>
                <p>1. <strong>constructor()</strong> 함수는 <strong>render()</strong> 함수보다 먼저 실행되지만 <strong style={{ 'color': 'red' }}>React.Component</strong>에 포함된 함수가 아닌 자바스크립트 함수다.</p>
                <p>2. <strong>setState()</strong> 함수가 실행되면 바뀐 state를 반영하기 위해 react가 자동으로 화면을 업데이트한다.</p>
                <p>3. <strong>componentWillUnmount()</strong> 함수는 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용한다.</p>
                <p>4. <a href="https://ko.reactjs.org/docs/react-component.html" target="_blank">React Lifecircle</a> 더 알아보기</p>
            </Fragment>
        );
    }
}

export default Lifecircle;