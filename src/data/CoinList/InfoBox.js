import React from "react";
import axios from "axios";

class ResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            info: [],
            // marketIndex: '',
            // marketCode: '',
        }
    };

    // componentDidMount() {
    //     this.getCoinInfo();
    // }

    getCoinInfo = async (index, code) => {
        const marketIndex = index;
        const marketCode = code;

        // marketCode에 맞게 API 불러오기
        const url = 'https://api.upbit.com/v1/ticker?markets=' + marketCode;
        const coins = await axios.get(url);
        this.setState({
            info: coins.data,
            loading: false,
        });
        
        console.log("** CoinList.js에서 InfoBox의 getCoinInfo(index, code) 호출완료!! **");
        console.log('Index: ' + marketIndex + '\n' + 'Code: ' + marketCode);
        console.log('URL: ' + url);

        console.log(this.state.info);
        
        console.log(this.state.info.market);
        console.log(this.state.info.low_price);
    };

    render() {
        const { info, loading } = this.state;

        // console.log(this.state.info);
        // console.log(this.props.marketIndex);
        // console.log(this.props.marketCode);
        
        return (
            <div className="info_box">
                {
                    loading ? (
                        <div style={{padding: '14px', textAlign: 'center'}}>&lt;&lt; 코인을 선택하세요.</div>
                    ) : (
                        <dl className="infomation">
                            <dt>한글명</dt>
                            <dd>{info.korean_name}</dd>
                            <dt>영문명</dt>
                            <dd>{info.english_name}</dd>
                            <dt>전일종가</dt>
                            <dd>{this.state.info.market}</dd>
                        </dl>
                    )
                }
            </div>
        );
    }
};

export default ResultBox;