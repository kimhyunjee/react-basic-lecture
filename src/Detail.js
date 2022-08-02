import React from "react";
import { useParams } from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { deleteBucket } from "./redux/modules/bucket"; //디스패치 하기위해 임포트
import { useHistory } from "react-router-dom" //뒤로가기를 사용하기 위해 임포트


const Detail = (props) => {
    const params = useParams();
    // console.log(index);
    const history = useHistory(); //임포트 후 세트선언
    const dispatch = useDispatch();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list);
    // console.log(bucket_list);// 뉴버킷리스트 바로 리턴했을때 오류가 난다면확인해바야함

    // console.log(bucket_list);
    // console.log(bucket_list[bucket_index]);


    return (
        <div>
            <h1> {bucket_list[bucket_index]} </h1>
            <button onClick={()=> {
                console.log("삭제해줘!");
                dispatch(deleteBucket(bucket_index)); //디스패치 하려면 액션생성함수를 임포트 해오ㅏ야함
                //임포트해온 deleteBucket해오고 안에는 버킷인덱스
                history.goBack(); //삭제시엔 페이지에 남는 게 없으니 자동 뒤로가기
            }}>삭제하기</button>
            </div>
    )
}

export default Detail;