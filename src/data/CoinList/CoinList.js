import React from "react";
import SearchBox from "./SearchBox";
import ResultBox from "./ResultBox";
import InfoBox from "./InfoBox";

class Stocks extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            market: '',
        };
    };

    changeValue = (keyword) => {
        this.setState({
            keyword: keyword
        })
        // console.log(keyword);
    }

    changeMarket = (market) => {
        this.setState({
            market: market.market
        })
        console.log(market);
    }

    render() {
        return (
            <div className="coin_wrap">
                <div className="coin_list">
                    <SearchBox 
                        changeValue={this.changeValue} 
                    />
                    <ResultBox 
                        keyword={this.state.keyword} 
                        changeMarket={this.changeMarket} 
                    />
                </div>
                <div className="coin_info">
                    <InfoBox 
                        market={this.state.market}
                    />
                </div>
            </div>
        );
    }
}

export default Stocks;