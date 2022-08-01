// bucket.js

// Actions type을 정해주는곳
const CREATE = 'bucket/CREATE';

//initial state 초기값
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Action Creators 액션타입에 대한 함수 생성
export function createBucket(bucket) {
    return {type: CREATE, bucket };
}


// Reducer
export default function reducer(state = initialState, action = {}) { 
    //파라미터에 ={} 하고 주는걸 기본값을준다고함 - 파라미터의 값이 없으면 빈 딕셔너리-오류방지위함
    switch (action.type) {
        case "bucket/CREATE": {
            const new_bucket_list = [...state.list, action.bucket];
            return {list: new_bucket_list};
            //return a'가 (바꿔서 보여줄값)들어가야하는데/원래있던 배열에 +되는것/위에 선언해줌
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