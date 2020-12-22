import React from "react";
import axios from "axios";

class ResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            coins: [],
            //marketCode: '',
        }
    };

    componentDidMount() {
        this.getCoins();
    }

    // getCoins = () => {
    //     //const coins = await JSON.stringify();
    //     //const coins = this.state.coins;
    //     fetch('https://api.upbit.com/v1/market/all')
    //         .then(function(response) {
    //             return response.json();
    //         }).then(function(myjson) {
    //             //console.log(JSON.stringify(myjson));
    //             const coins = await.JSON.stringify(myjson);
    //             this.setState({ 
    //                 // coins: JSON.stringify(myjson),
    //                 coins: coins,
    //             });
    //         });
    //     // console.log(coins);
    // }

    getCoins = async () => {
        const url = 'https://api.upbit.com/v1/market/all';
        const coins = await axios.get(url);
        this.setState({
            coins: coins.data,
            loading: false,
        });
        //console.log(this.state.coins);
    };

    handleClick = (e) => {
        const marketIndex = e.currentTarget.dataset.id;
        const marketCode = this.state.coins[marketIndex].market;
        this.props.changeMarket(marketIndex, marketCode);
        // console.log(marketIndex);
        // console.log(marketCode);
    }

    mapCoinList = (coins) => {
        coins.sort();
        coins = coins.filter(
            (text) => {
                return (
                    text.korean_name.indexOf(this.props.keyword) > -1 || 
                    text.english_name.indexOf(this.props.keyword) > -1
                );
            }
        );
        return (
            coins.map((coins, i) => (
                <li key={i} data-id={i} onClick={this.handleClick}>
                    <div className="dvbx">
                        <div className="item">
                            <div className="inbx">{coins.korean_name}<p>{coins.market}</p></div>
                        </div>
                        <div className="item">
                            <div className="inbx">{coins.english_name}</div>
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