# todo-list

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```
---
### 넣을 기능
- todo-item 추가, 수정, 삭제
- 완료 체크/체크 취소 
- 완료된 아이템 노출여부 토글
### Vuex 

Vuex 를 어떻게 사용하는게 가장 좋을지 생각해보자.
#### store 에 어떤 값을 저장하는게 좋은가?

react redux 에서는 중요한 값, 사이트를 접속중인 동안 페이지를 이동해도 유지되는 값을 넣었다. Vuex도 전역상태관리이니 이 점은 비슷할 것.

- 전체 Todo 목록을 저장한다. 목록의 각 아이템에는 제목, 내용, 완료여부를 넣는다.


