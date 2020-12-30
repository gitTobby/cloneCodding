import React, { Component } from "react";
import axios from "axios";

class ResultBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      coins: [],
    };
  }

  componentDidMount() {
    this.getCoins();
  }

  getCoins = async () => {
    const url = "https://api.upbit.com/v1/market/all";
    const coins = await axios.get(url);
    this.setState({
      coins: coins.data,
      loading: false,
    });
  };

  handleClick = (coin) => {
    const { changeSelectedCoin } = this.props;
    changeSelectedCoin(coin);
  };

  mapCoinList = (coins) => {
    const { keyword } = this.props;
    const { selectedCoin } = this.props;

    const filteredCoins = coins.filter((coin) => {
      return (
        coin.korean_name.indexOf(keyword) !== -1 ||
        coin.english_name.indexOf(keyword) !== -1
      );
    });

    return filteredCoins.map((coin) => (
      <li
        key={coin.market}
        className={selectedCoin === coin ? "selected" : ""}
        onClick={() => this.handleClick(coin)}
      >
        <div className="dvbx">
          <div className="item">
            <div className="inbx">
              {coin.korean_name}
              <p>{coin.market}</p>
            </div>
          </div>
          <div className="item">
            <div className="inbx">{coin.english_name}</div>
          </div>
        </div>
      </li>
    ));
  };

  render() {
    const { coins, loading } = this.state;

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
            {loading ? (
              <div style={{ padding: "14px", textAlign: "center" }}>
                Loading...
              </div>
            ) : (
              this.mapCoinList(coins)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ResultBox;
