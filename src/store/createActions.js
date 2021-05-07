import {
  LOGIN,
  CHANG_COUNT_DOWN_START,
  CHANG_COUNT_DOWN_OVER,
  START_COUNT_DOWN_ONE,
  COUNT_DOWN_LOADING,
  COUNT_DOWN_OVER,

} from "./constants";

export const loginAction = (promise) => ({
  type: LOGIN,
  payload: promise
});

export const countDownStartAction = () => ({
  type: CHANG_COUNT_DOWN_START,
});

export const countDownOverAction = () => ({
  type: CHANG_COUNT_DOWN_OVER,
});

export const countDownOneAction = () => ({
  type: START_COUNT_DOWN_ONE,
});


export const sendShoutMessageAction = (message) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: COUNT_DOWN_LOADING });
      const data = new Promise((resolve) => {
        setTimeout(() => {
          resolve("验证码为123456");
        }, 2000);
      });
      data.then((res) => {
        message.success(res);
        dispatch({ type: COUNT_DOWN_OVER });
        dispatch(countDownStartAction());
        if (getState().countDownObj.isCountDown) {
          const timer = setInterval(() => {
            dispatch(countDownOneAction());
            if (getState().countDownObj.countDown === 0) {
              dispatch(countDownOverAction());
              clearInterval(timer);
            }
          }, 1000);
        }
      });
    } catch (err) {
      message.error(err);
    }
  };
};

// redux-saga 拦截的action
// export const submitForSagaAction =(userMessage) => ({
//   type: SUBMIT_FOR_SAGA,
//   userMessage
// })
