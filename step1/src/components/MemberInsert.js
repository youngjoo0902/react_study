import React, {useState} from "react";
import memberList from "./MemberList";
import '../App.css';

let result = [];//데이터를 담는 info가 매번 초기화가 되기 때문에, scope 밖으로 뺌
//그러면, 버튼 누를때 리셋을 시키지 않는다면...? 인풋에 값이 초기화가 안됨...
//결국 유효범위와 별도로 데이터가 존재해야 할듯...


//회원번호, 이름, 전화, 성별, 생일
const MemberInsert = () =>{
    const List = memberList;
    //const [memberNumber, setMemberNumber] = useState(0); //필요없음
    const [info, setValue] = useState({
        no : 0,
        username : "",
        phone : "",
        gender : "",
        birth : ""
    });
    const {no, username, phone, gender, birth} = info;
    
    const changeValue = e => {
        const cloneValue = {
            ...info,
            [e.target.name] : e.target.value
        }
        setValue(cloneValue);
    }
    const eventClick = e => {
        setValue({
            ...info,
            no : result.length + 1,//배열 갯수 + 1
            username : "",
            phone : "",
            gender : "",
            birth : ""
        });
        result.push(info);//입력 최종 상태의 info를 외부 컨텍스트 배열에 차곡차곡 쌓아서, props 로 넘김
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
                <tr>
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
        <List value={result}></List>
    </>
    );
}

export default MemberInsert;