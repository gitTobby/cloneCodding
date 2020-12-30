import React, { Component } from "react";
import SearchBox from "./SearchBox";
import ResultBox from "./ResultBox";
import InfoBox from "./InfoBox";

class CoinList extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      selectedCoin: null,
    };
  }

  changeValue = (keyword) => {
    this.setState({ keyword });
  };

  changeSelectedCoin = (selectedCoin) => {
    this.setState({ selectedCoin });
  };

  render() {
    const { keyword, selectedCoin } = this.state;
    return (
      <div className="coin_wrap">
        <div className="coin_list">
          <SearchBox value={keyword} changeValue={this.changeValue} />
          <ResultBox
            keyword={keyword}
            changeSelectedCoin={this.changeSelectedCoin}
            selectedCoin={selectedCoin}
          />
        </div>
        <div className="coin_info">
          <InfoBox selectedCoin={selectedCoin} />
        </div>
      </div>
    );
  }
}

export default CoinList;
