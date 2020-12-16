import React from "react";
class SearchBox extends React.Component {
    handleChange = (e) => {
        this.props.changeValue(e.target.value); // 부모 컴포넌트로 데이터를 변경요청하는 부분
    }

    render() {
        return (
            <div className="search_box">
                <input 
                    type="text" 
                    placeholder="검색어를 입력하세요" 
                    
                    onChange={this.handleChange}
                />
            </div>
        );
    }
};

export default SearchBox;