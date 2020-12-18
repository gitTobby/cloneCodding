import React from "react";
import axios from "axios";

class ResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            info: [],
        }
    };

    componentDidMount() {
        this.getCoinInfo();
    }

    getCoinInfo = async () => {
        // market 정보 있을 때, 없을 때 구분해서 url 던지자
        const marketCode = this.props.market;
        const url = 'https://api.upbit.com/v1/ticker?markets=' + marketCode;
        const coins = await axios.get(url);
        this.setState({
            info: coins.data,
            loading: false,
        });
        //console.log(this.state.info);
    };

    render() {
        const { info, loading } = this.state;
        //console.log(coins);
        return (
            <div className="info_box">
                {
                    loading ? (
                        <div style={{padding: '14px', textAlign: 'center'}}>&lt;&lt; 코인을 선택하세요.</div>
                    ) : (
                        <dl className="infomation">
                            <dt>한글명</dt>
                            <dd>비트코인</dd>
                            <dt>영문명</dt>
                            <dd>Bitcoin</dd>
                            <dt>현재가</dt>
                            <dd>5,034원</dd>
                        </dl>
                    )
                }
            </div>
        );
    }
};

export default ResultBox;