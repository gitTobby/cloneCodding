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

    componentDidUpdate(prevProps) {
        if(this.props.selectedCoin && (!prevProps || prevProps.selectedCoin !== this.props.selectedCoin)) {
            this.getCoinInfo();
        }
    }
    
    getCoinInfo = async () => {
        const url = 'https://api.upbit.com/v1/ticker?markets=' + this.props.selectedCoin.market;
        const coins = await axios.get(url);
        //console.log(coins)
        this.setState({
            info: coins.data,
            loading: false,
        });
        //console.log(this.state.info);
    };

    render() {
        const { info, loading } = this.state;
        
        return (
            <div className="info_box">
                {
                    loading ? (
                        <div style={{padding: '14px', textAlign: 'center'}}>&lt;&lt; 코인을 선택하세요.</div>
                    ) : (
                        <dl className="infomation">
                            <dt>한글명</dt>
                            <dd>{this.props.selectedCoin.korean_name}</dd>
                            <dt>영문명</dt>
                            <dd>{this.props.selectedCoin.english_name}</dd>
                            <dt>전일종가</dt>
                            <dd>{info[0].acc_trade_price}</dd>
                        </dl>
                    )
                }
            </div>
        );
    }
};

export default ResultBox;