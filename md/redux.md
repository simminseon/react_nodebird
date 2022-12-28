# 리덕스 = 중앙 데이터 저장소

- 여러 컴포넌트에서 공통적으로 쓰이는 데이터를 관리

contextAPI -> 가벼운 앱
리덕스 -> 에러가 나도 해결이 쉬움, 안정적, 코드량 많음
mobx -> 코드량 적음, 에러 추적이 힘듦

contextAPI는 비동기 3단계를 직접 구현해야함

1. 데이터 요청
2. 성공
3. 실패

# 컴포넌트에서는 데이터 요청 웬만하면 x, 컴포넌트는 화면 구현에 집중

---

store : state와 reducer 포함

# action 만들기

<pre>
    <code>
        const changeNickname = {
            type: "CHANGE_NICKNAME",
            data: "minseon",
        };  
    </code>
</pre>

# 위처럼 모든 액션을 일일이 만들어줄 순 없어서 액션을 동적으로 만들어내는 함수를 만듦

## action creator

<pre>
    <code>
        const changeNickname = (data) => {
        return {
                type: "CHANGE_NICKNAME",
                data,
            };
        };
    </code>
</pre>

# 사용법

<pre>
    <code>
        store.dispatch(changeNickname("sunnyyyy"));
    </code>
</pre>

# reducer

- 이전 상태와 액션을 통해서 다음 상태를 만들어내는 함수
<pre>
    <code>
        const rootReducer = (state = initialState, action) => {
            switch (action.type) {
                case "LOG_IN":
                return {
                    ...state,
                    user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                    },
                };
            }
        };
    </code>
</pre>
