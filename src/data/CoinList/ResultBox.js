import React from "react";
import axios from "axios";

class ResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            selectItem: false,
            coins: [],
        }
    };

    componentDidMount() {
        this.getCoins();
    }

    getCoins = async () => {
        const url = 'https://api.upbit.com/v1/market/all';
        const coins = await axios.get(url);
        this.setState({
            coins: coins.data,
            loading: false,
        });
    };

    handleClick = (coin) => {
        this.setState({
            selectItem: true,
        });
        this.props.changeSelectedCoin(coin);
    }

    mapCoinList = (coins) => {
        //coins.sort(); ==> 콘솔 찍어서 테스트 해보기
        coins = coins.filter(
            (coin) => {
                return (
                    coin.korean_name.indexOf(this.props.keyword) > -1 || 
                    coin.english_name.indexOf(this.props.keyword) > -1
                );
            }
        );
        return (
            coins.map((coin, i) => (
                <li key={i}  className={this.state.selectItem ? 'selected': null} onClick={() => this.handleClick(coin)}>
                    <div className="dvbx">
                        <div className="item">
                            <div className="inbx">{coin.korean_name}<p>{coin.market}</p></div>
                        </div>
                        <div className="item">
                            <div className="inbx">{coin.english_name}</div>
                        </div>
                    </div>
                </li>
            ))
        );
    };

    render() {
        const { coins, loading } = this.state;
        //console.log(coins);
        return (
            <div className="result_box">
                <div className="result_header">
                    <div className="dvbx">
                        <div className="item">
                            <div className="inbx">한글명</div>
                        </div>
                        <div className="item">
                            <div className="inbx">영문명</div>
                        </div>
                    </div>
                </div>
                <div className="result_content">
                    <ul className="result_list">
                        {
                            loading ? (
                                <div style={{padding: '14px', textAlign: 'center'}}>Loading...</div>
                            ) : (
                                this.mapCoinList(coins)
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
};

export default ResultBox;