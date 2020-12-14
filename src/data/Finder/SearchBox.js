import React from "react";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
    };

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
        this.props.changeValue(e.target.value);
    }

    render() {
        return (
            <div className="search_box">
                <input 
                    type="text" 
                    placeholder="검색어를 입력하세요" 
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
};

export default SearchBox;