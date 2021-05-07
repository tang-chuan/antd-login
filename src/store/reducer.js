import {
  LOGIN,
  PENDING,
  FULFILLED,
  REJECTED,
  CHANG_COUNT_DOWN_START,
  CHANG_COUNT_DOWN_OVER,
  START_COUNT_DOWN_ONE,
  COUNT_DOWN_LOADING,
  COUNT_DOWN_OVER,
} from "./constants.js";

const defaultState = {
  loading: false,
  data: {},
  errMassage: "",
  countDownObj: {
    countDownLoading: false,
    isCountDown: false,
    countDown: 60,
  },
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN + PENDING:
      console.log(action);

      return {
        ...state,
        loading: true,
      };
    case LOGIN + FULFILLED:
      console.log(action);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN + REJECTED:
      console.log(action);

      return {
        ...state,
        loading: false,
        errMassage: action.payload,
      };
    case CHANG_COUNT_DOWN_START:
      return {
        ...state,
        countDownObj: {
          ...state.countDownObj,
          isCountDown: true,
          countDown: state.countDownObj.countDown - 1,
        },
      };
    case START_COUNT_DOWN_ONE:
      return {
        ...state,
        countDownObj: {
          ...state.countDownObj,
          countDown: state.countDownObj.countDown - 1,
        },
      };
    case CHANG_COUNT_DOWN_OVER:
      return {
        ...state,
        countDownObj: {
          ...state.countDownObj,
          isCountDown: false,
          countDown: 60,
        },
      };
    case COUNT_DOWN_LOADING:
      return {
        ...state,
        countDownObj: {
          ...state.countDownObj,
          countDownLoading: true,
        },
      };
    case COUNT_DOWN_OVER:
      return {
        ...state,
        countDownObj: {
          ...state.countDownObj,
          countDownLoading: false,
        },
      };
    default:
      return state;
  }
}

export default reducer;
