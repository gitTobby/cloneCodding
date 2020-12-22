import React, { Children } from "react";
import SearchBox from "./SearchBox";
import ResultBox from "./ResultBox";
import InfoBox from "./InfoBox";

class Stocks extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            // marketIndex: '',
            // marketCode: '',
        };
        this.InfoBox = React.createRef();
    };

    changeValue = (keyword) => {
        this.setState({
            keyword: keyword
        })
        // console.log(keyword);
    }

    changeMarket = (marketIndex, marketCode) => {
        this.InfoBox.current.getCoinInfo(marketIndex, marketCode);
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
                        // marketIndex={this.state.marketIndex}
                        // marketCode={this.state.marketCode} 
                        ref={this.InfoBox}
                    />
                </div>
            </div>
        );
    }
}

export default Stocks;