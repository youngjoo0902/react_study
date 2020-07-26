import React from 'react';
import MemberSearch from "./MemberSearch";


const MemberList = (props) => {
    const info = props.value;
    const Search = MemberSearch;
    /*
        info 내용
        [
            {no : "값", username : "값", phone : "값", gender : "값", birth : "값"},
            {no : "값", username : "값", phone : "값", gender : "값", birth : "값"},
            {no : "값", username : "값", phone : "값", gender : "값", birth : "값"}
            ...
        ];
    */
    return(
        <>
            <h1>회원목록</h1>

            <table>
            <colgroup>
                <col width="*" />
                <col width="33%" />
                <col width="33%" />
            </colgroup>
            <thead>
                <tr>
                    <th>회원번호</th>
                    <th>이름</th>
                    <th>휴대폰번호</th>
                </tr>
            </thead>
            <tbody>
                {
                    info.map((value, index) => (
                        <tr key={index}>
                            <td>key : {index} / 회원번호 : {value.no}</td>
                            <td>{value.username}</td>
                            <td>{value.phone}</td>
                        </tr>
                    )
                    )
                }
            </tbody>
            </table>
            <Search />
        </>
    );
}

export default MemberList;