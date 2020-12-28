// import React, { Children } from "react";
import React from "react";
import SearchBox from "./SearchBox";
import ResultBox from "./ResultBox";
import InfoBox from "./InfoBox";

class CoinList extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            selectedCoin: null,
        };
    };

    changeValue = (keyword) => {
        this.setState({
            keyword: keyword
        })
        // console.log(keyword);
    }

    changeSelectedCoin = (selectedCoin) => {
        //console.log(selectedCoin);
        this.setState({
            selectedCoin: selectedCoin
        })
        //console.log(selectedCoin);
    }

    // changeMarket = (marketIndex, marketCode) => {
    //     this.InfoBox.current.getCoinInfo(marketIndex, marketCode);
    // }

    render() {
        return (
            <div className="coin_wrap">
                <div className="coin_list">
                    <SearchBox 
                        value={this.state.keyword}
                        changeValue={this.changeValue} 
                    />
                    <ResultBox 
                        keyword={this.state.keyword}
                        changeSelectedCoin={this.changeSelectedCoin}
                        selectedCoin={this.state.selectedCoin}
                    />
                </div>
                <div className="coin_info">
                    <InfoBox 
                        selectedCoin={this.state.selectedCoin}
                    />
                </div>
            </div>
        );
    }
}

export default CoinList;