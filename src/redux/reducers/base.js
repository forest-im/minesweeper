import { TOGGLE_MODAL } from "../actionTypes";

const initialState = {
  isModalShowing: false,
  timer: 0,
};

const base = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        isModalShowing: !state.isModalShowing,
      };
    }
    default: {
      return state;
    }
  }
};

export default base;
