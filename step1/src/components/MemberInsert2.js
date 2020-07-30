import React, {useState} from "react";
import memberList from "./MemberList";
import '../App.css';

//회원번호, 이름, 전화, 성별, 생일
const MemberInsert = () =>{
    const List = memberList;//멤버리스트 컴포넌트
    const [resultValue, setResultValue] = useState([]);//추가 버튼 클릭시, 최종 데이터를 쌓을 변수
    const tr = React.createRef();//라디오 버튼 체크를 삭제하기 위해 <TR> 을 ref로 접근
    const [info, setValue] = useState({//매 입력시마다, 바뀌는 글자 쌓이는 변수
        no : 0,//초기값들... 없어도 되는데, 입력시 에러가 떠서 놔둠...
        username : "",
        phone : "",
        gender : "",
        birth : ""
    });
    
    const changeValue = e => {//매 입력시마다, 자기자신의 name에 맞게 value가 꼽힘 (info에 들어감)
        const cloneValue = {
            ...info,
            [e.target.name] : e.target.value
        }
        setValue(cloneValue);
    }
    const eventClick = e => {
        const nextInfo = resultValue.concat(info);//최종 데이터로 만들 빈 배열과 concat시킴
        setResultValue(nextInfo);//useState로 최종 데이터에 덮어씀
        setValue({//인풋에 기본값들 삭제 및 번호는 +1 증가시켜둠
            no : resultValue.length + 1,
            username : "",
            phone : "",
            gender : "",
            birth : ""
        });
        //라디오버튼에 체크를 제거 (일단 제이쿼리를 쓸 수 없으니, 돔스크립트로 대충떼움)
        let lables = tr.current.getElementsByTagName("label"), i = 0;
        for(; i < lables.length; i++){
            lables[i].getElementsByTagName("input")[0].checked = false;
        }
    };
    const keyPress = e => {
        if(e.key === "Enter"){
            eventClick();
        }
    };
    
    return(
    <>
        <h1>회원추가</h1>

        <table>
            <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
            </colgroup>
            <thead>
                <tr>
                <th>이름</th>
                <th>휴대폰번호</th>
                <th>성별</th>
                <th>법정생년월일</th>
                </tr>
            </thead>
            <tbody>
                <tr ref={tr}>
                <td><input type="text" name="username" size="5" placeholder="김교보" value={username} onChange={changeValue} /></td>
                <td><input type="text" name="phone" size="15" placeholder="010-1234-1234" value={phone} onChange={changeValue} /></td>
                <td><label><input type="radio" name="gender" value="남" val={gender} onChange={changeValue} /> 남</label> &nbsp; <label><input type="radio" name="gender" value="여" val={gender} onChange={changeValue} /> 여</label></td>
                <td><input type="text" name="birth" size="10" placeholder="19880101" value={birth} onChange={changeValue} onKeyPress={keyPress} /></td>
                </tr>
            </tbody>
        </table>

        <div className="btn_block">
            <button value={no} onClick={eventClick}>추가</button>
        </div>
        <List value={resultValue}></List>
    </>
    );
}

export default MemberInsert;