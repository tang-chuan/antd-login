// import { takeEvery, put, all } from 'redux-saga/effects'
// import { SUBMIT_FOR_SAGA } from './constants'
// import { message } from 'antd'
// import { 
//     getTokenAction
// } from './createActions'
// import  getLogin  from '../service/index'


// function* getLoginSubmit(action) {
//     console.log(action);
//     try {
//         const res = yield getLogin(action.userMessage.data)
//         console.log(res);
//         if(res.result === "success") {
//           message.success("登录成功！")
//           yield put(getTokenAction(res.message.token))
//           yield action.userMessage.history.push('/home')
//         } else {
//           message.warning('登录失败，请重试！')
//         }
//     } catch(e) {
//         yield message.warning('网络错误，请重试！')
//     }
    
// }

// function* saga() {
//     yield all([
//         takeEvery(SUBMIT_FOR_SAGA,getLoginSubmit)
//       ])
// }



// export default saga;