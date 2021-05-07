import {  createStore, applyMiddleware, compose} from 'redux' // applyMiddleware 应用中间件
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from "redux-promise-middleware"
// import createSagaMiddleware from 'redux-saga'

import reducer from './reducer.js'
// import saga from './saga'
// composeEnhancers函数  启用redux-devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:  true}) || compose;

// 创建sagaMiddleware 中间件
// const sagaMiddleware = createSagaMiddleware();

const storeenhancer = applyMiddleware(thunkMiddleware, promiseMiddleware);

const store = createStore(reducer, composeEnhancers(storeenhancer));
// 启动中间件sagaMiddleware
// sagaMiddleware.run(saga)

export default store;

// function createStore (reducer) {
//   let state = null
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener) //将监听函数push到listeners中
//   const getState = () => state //获取当前状态
//   const dispatch = (action) => {
//     state = reducer(state, action)// 覆盖原对象
//     listeners.forEach((listener) => listener())//遍历listeners并调用
//   }
//   dispatch({}) // 初始化 state
//   return { getState, dispatch, subscribe }
// }
