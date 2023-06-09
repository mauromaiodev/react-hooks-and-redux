import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
  data: ["React", "Redux", "Node.js", "Express", "MongoDB"],
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
