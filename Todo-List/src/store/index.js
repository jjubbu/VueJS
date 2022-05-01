import { createStore } from "vuex";

export default createStore({
  state: {
    todoList: [
      {
        id: 0,
        title: "제목이다!",
        comment:
          "마라탕에 푸주, 두부피, 죽순, 어묵만 가득 채워서 먹어보고싶다.",
        done: false,
      },
      {
        id: 1,
        title: "제목이다!제목이다!",
        comment: "영어공부를 좀 혀야하는디 에혀 우짜냐",
        done: false,
      },
      {
        id: 2,
        title: "제목이다!제목이다!제목이다!",
        comment: "뷰 생각보다 재밌다 하지만 여전히 리액트가 너무 좋은.",
        done: false,
      },
    ],
  },
  getters: {},
  mutations: {
    addItem(state, object) {
      let item = {
        id: state.todoList.length,
        ...object,
      };
      state.todoList.push(item);
    },
    removeItem(state, id) {
      state.todoList = state.todoList.filter((x) => id !== x);
    },
    editItem(state, object) {
      state.todoList[object.id - 1] = object;
    },
    doneItem(state, id) {
      state.todoList[id - 1].done = !state.todoList[id - 1].done;
    },
  },
  actions: {},
  modules: {},
});
