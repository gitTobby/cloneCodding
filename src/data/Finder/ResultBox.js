import React from "react";

class ResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  // 굳이 데이터를 State로 만들 필요 없음
            infoList: [
                {no: '1', name: '이창민', position: '선임연구원', phone: '010-9427-1015', address: '부산광역시 해운대구 재송동 1073-3 051센텀', email: 'apjammanbo@naver.com'},
                {no: '2', name: '최명근', position: '선임연구원', phone: '010-4013-8061', address: '김해시 천곡로 26 두산위브 제니스 128동 801호', email: 'choimg0329@naver.com'},
                {no: '3', name: '박성혜A', position: '연구원', phone: '010-5053-8238', address: '부산광역시 북구 백양대로1003 115동 1001호', email: 'gps03155@naver.com'},
                {no: '4', name: '최원진', position: '연구원', phone: '010-2772-1491', address: '부산광역시 해운대구 센텀2로 33(우동) 센텀 뷰라움 1001호', email: '1jin94@naver.com'},
                {no: '5', name: '김기덕', position: '연구원', phone: '010-8223-8134', address: '부산광역시 부산진구 부암동 타워베르빌 102동 3511호', email: 'gdtbgl93@gmail.com'},
                {no: '6', name: '김대현', position: '연구원', phone: '010-9876-6245', address: '부산광역시 연제구 연산동 고분로 100번길 28', email: 'zcvfcat@gmail.com'},
                {no: '7', name: '황순기', position: '주임연구원', phone: '010-8505-1222', address: '부산광역시 연제구 월드컵대로 32번길 57-1', email: 'whitecurryn@naver.com'},
                {no: '8', name: '정화평', position: '연구원', phone: '010-5526-6520', address: '부산광역시 북구 덕천로 259번길 30, 103동 210호', email: 'hopuo132@naver.com'},
                {no: '9', name: '박자겸', position: '연구원', phone: '010-3335-8624', address: '부산광역시 남구 분포로 111 lg메트로시티 137동 2002호', email: 'jje3335@naver.com'},
                {no: '10', name: '최은우', position: '연구원', phone: '010-2298-9617', address: '부산광역시 해운대구 재반로 119-20 3층', email: 'sadb0101@naver.com'},
                {no: '11', name: '변지윤', position: '연구원', phone: '010-6682-4733', address: '부산광역시 수영구 수영동 453-10 세영카운티 702호', email: 'jy960325@naver.com'},
                {no: '12', name: '김홍일', position: '연구원', phone: '010-4551-9888', address: '부산광역시 금정구 두실로 37번길 53-3', email: 'oqlioc1@naver.com'},
                {no: '13', name: '이지훈C', position: '주임연구원', phone: '010-3169-7542', address: '부산광역시 수영구 광서로 10번길 41 드림밸리 602호', email: 'jihoon6372@hanmail.net'},
                {no: '14', name: '정지연A', position: '연구원', phone: '010-5135-6546', address: '부산광역시 금정구 오륜대로 40-2', email: 'lock0665@gmail.com'},
                {no: '15', name: '안성민A', position: '연구원', phone: '010-2957-1002', address: '부산광역시 해운대구 우동 해운대로 383번길 93, 센텀두산위브 101동 1202호', email: 'ggavi2000@naver.com'},
                {no: '16', name: '이지은A', position: '연구원', phone: '010-2013-2263', address: '부산광역시 수영구 광안동 1070-2 복하우스 A동 202호', email: 'eejieun98@naver.com'},
                {no: '17', name: '하정훈', position: '연구원', phone: '010-6363-4236', address: '부산광역시 수영구 수영동 453-10 세영카운티 606호', email: 'hajh1994@naver.com'},
                {no: '18', name: '김동혁', position: '주임연구원', phone: '010-8512-2455', address: '부산광역시 수영구 수영로642번길 24 한솔리치빌 203호', email: 'itobby@naver.com'},
                {no: '19', name: '최민지A', position: '주임연구원', phone: '010-3912-3762', address: '부산광역시 해운대구 재송동 1074-8 센텀예담 205호', email: 'chlalswl00@naver.com'},
                {no: '20', name: '백화현', position: '주임연구원', phone: '010-9416-8673', address: '부산광역시 수영구 수영로 666번길 6 수영역삼정그린코아더시티오피스텔 314호', email: 'chord@kakako.co.kr'},
                {no: '21', name: '윤지만', position: '연구원', phone: '010-7641-0069', address: '부산광역시 수영구 연수로 249번길 21 망미 디아이리더스 603호', email: 'giro13@naver.com'},
                {no: '22', name: '임채형', position: '연구원', phone: '010-5299-0701', address: '부산광역시 금정구 구서2동 금강로 565번길 54 선경3차아파트 307-1502호', email: 'cogud0908@naver.com'}
            ],
        };
    };

    convertToTag(text) {
        const infoText = text;
        const keywordText = this.props.keyword;
        const highlightTag = <em>{keywordText}</em>;

        if(keywordText) {
            const splits = infoText.split(keywordText);
            //console.log(infoText);
            const ret = [];
            splits.forEach((item, index) => {   // index는 단순히 배열의 순서
                ret.push(item);
                if(index !== splits.length - 1) {
                    ret.push(highlightTag);
                    
                }
                console.log(ret, index);
            });
            return ret;
        } else {
            return infoText;
        };
    }

    mapInfoList = (infoList) => {
        infoList.sort();    // unicode를 비교하여 오름차순 정렬(배열이 바뀜)
        infoList = infoList.filter(     // 새 배열을 반환, 배열이 바뀌지 않음
            (info) => {
                return (
                    info.name.indexOf(this.props.keyword) > -1 || 
                    info.position.indexOf(this.props.keyword) > -1 || 
                    info.phone.indexOf(this.props.keyword) > -1 || 
                    info.address.indexOf(this.props.keyword) > -1 || 
                    info.email.toLowerCase().indexOf(this.props.keyword) > -1
                );
            }
        );
        return (
            infoList.map((info, i) => (
                <li key={i}>
                    <div className="dvbx">
                        <div className="item">
                            <div className="inbx">{this.convertToTag(info.name)}</div>
                        </div>
                        <div className="item">
                            <div className="inbx">{this.convertToTag(info.position)}</div>
                        </div>
                        <div className="item">
                            <div className="inbx">{this.convertToTag(info.phone)}</div>
                        </div>
                        <div className="item">
                            <div className="inbx">{this.convertToTag(info.address)}</div>
                        </div>
                        <div className="item">
                            <div className="inbx">{this.convertToTag(info.email)}</div>
                        </div>
                    </div>
                </li>
            ))
        );
    };

    render() {
        const keyword = this.props.keyword;
        console.log(keyword);
        return (
            <div className="result_box">
                <div className="result_header">
                    <div className="dvbx">
                        <div className="item">
                            <div className="inbx">이름</div>
                        </div>
                        <div className="item">
                            <div className="inbx">직급</div>
                        </div>
                        <div className="item">
                            <div className="inbx">전화번호</div>
                        </div>
                        <div className="item">
                            <div className="inbx">주소</div>
                        </div>
                        <div className="item">
                            <div className="inbx">이메일</div>
                        </div>
                    </div>
                </div>
                <div className="result_content">
                    <ul className="result_list">
                        {this.mapInfoList(this.state.infoList)}
                    </ul>
                    {/* Search Eempty */}
                    {/* <div className="search_empty">검색 된 항목이 없습니다.</div> */}
                </div>
            </div>
        );
    }
};

export default ResultBox;