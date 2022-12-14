// bucket.js

// Actions type을 정해주는곳
const CREATE = 'bucket/CREATE';
const DELETE = "bucket/DELELTE";

//initial state 초기값
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기","코딩하기"],
};

// Action Creators 액션타입에 대한 함수 생성
export function createBucket(bucket) {
  console.log("액션을 생성할거야 ! ");
    return {type: CREATE, bucket };
}

export function deleteBucket(bucket_index) {
  console.log("지울 버킷 인덱스" , bucket_index);
  return {type: DELETE, bucket_index};
}


// Reducer
export default function reducer(state = initialState, action = {}) { 
    //파라미터에 ={} 하고 주는걸 기본값을준다고함 - 파라미터의 값이 없으면 빈 딕셔너리-오류방지위함
    switch (action.type) {
        case "bucket/CREATE": {
          console.log("이제 값을 바꿀거야 ! ");
            const new_bucket_list = [...state.list, action.bucket];
            return {list: new_bucket_list};
            //return a'가 (바꿔서 보여줄값)들어가야하는데/원래있던 배열에 +되는것/위에 선언해줌
        }
        case "bucket/DELETE": {
          console.log(state, action); // 삭제하기 확인 어떤 리스트를 ㅏㄱ지고잇나, 액션개체확인
          const new_bucket_list = state.list.filter((l, idx)=> {
            // console.log(
            //   parseInt(action.bucket_index) !== idx , 
            //   parseInt(action.bucket_index), 
            //   idx);
            return parseInt(action.bucket_index) !== idx; //새 배열은 필터로 거른, 삭제된거만 빼고 나와야하니까
            //!== 하면 true만 나오니까 != 해주면 되는데 그럼 노란밑줄쳐짐. 그렇다면?? parseInt!
            console.log(new_bucket_list);
          })
          return {list:new_bucket_list};
          //return new_bucket_list; //이렇게 바로 뉴버킷리스트하면 오류가난다
          //return 은 state를 뱉어주ㅓ야함 {키, 밸류} 리스트 형식을 맞춰줘야한다
        }
      // do reducer stuff
      default: return state;
    }
  }

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
// //미들웨어?-중간다리 액션,액션크리에이터,리듀서,
// // 서버에서데이터가져올때 비동기/ 이걸 바로 리듀서로 넘겨줘 불가/ 현재는쓰지않으니 지워주기