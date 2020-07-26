import React from "react";
import MemberSearchResult from "./MemberSearchResult";

const MemberSearch = () => {
    const SearchResult = MemberSearchResult;
    return(

        <>
            <h1>회원검색</h1>

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
                <td><input type="text" name="name" size="5" placeholder="김교보" /></td>
                <td><input type="text" name="phone" size="15" placeholder="010-1234-1234" /></td>
                <td><label><input type="radio" name="gender" /> 남</label> &nbsp; <label><input type="radio" name="gender" /> 여</label></td>
                <td><input type="text" name="birth" size="10" placeholder="19880101" /></td>
                </tr>
            </tbody>
            </table>
        
            <div className="btn_block">
            <input type="submit" value="검색" />
            {/* <!-- <button type="button">검색</button> --> */}
            </div>
            <SearchResult></SearchResult>
        </>
    );

}

export default MemberSearch;