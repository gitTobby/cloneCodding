import React from "react";
import SearchBox from "./SearchBox";
import ResultBox from "./ResultBox";

class Finder extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
        };
        //console.log(this.state.keyword);
    };

    changeValue = (keyword) => {
        this.setState({
            keyword: keyword
        })
        // console.log(keyword);
    } 

    render() {
        return (
            <div className="finder_wrap">
                <SearchBox changeValue={this.changeValue} />
                <ResultBox keyword={this.state.keyword} />
            </div>
        );
    }
}

export default Finder;