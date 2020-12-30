import React, { Component } from "react";
import axios from "axios";

class ResultBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      info: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { selectedCoin } = this.props;
    if (
      selectedCoin &&
      (!prevProps || prevProps.selectedCoin !== selectedCoin)
    ) {
      this.getCoinInfo();
    }
  }

  getCoinInfo = async () => {
    const { selectedCoin } = this.props;
    const url =
      "https://api.upbit.com/v1/ticker?markets=" + selectedCoin.market;
    const coins = await axios.get(url);
    this.setState({
      info: coins.data,
      loading: false,
    });
  };

  render() {
    const { selectedCoin } = this.props;
    const { info, loading } = this.state;

    return (
      <div className="info_box">
        {loading ? (
          <div style={{ padding: "14px", textAlign: "center" }}>
            {">> 코인을 선택하세요"}
          </div>
        ) : (
          <dl className="infomation">
            <dt>한글명</dt>
            <dd>{selectedCoin.korean_name}</dd>
            <dt>영문명</dt>
            <dd>{selectedCoin.english_name}</dd>
            <dt>전일종가</dt>
            <dd>{info[0].acc_trade_price}</dd>
          </dl>
        )}
      </div>
    );
  }
}

export default ResultBox;
