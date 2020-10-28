import React from "react";
import { Fragment } from "react";

class Lorder extends React.Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        //데이터 로딩이 완료되면 실행
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }

    render() {
        const { isLoading } = this.state;
        return (
            <Fragment>
                {isLoading ? 'Loading...' : 'We are ready'}
            </Fragment>
        );
    }
}

export default Lorder;