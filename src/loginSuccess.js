import React, { PureComponent } from 'react';
import JudgeJurisdiction from './judgeJurisdiction/JudgeJurisdiction';
import PropTypes from "prop-types";


class loginSuccess extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: '登录成功！',
    };
  }

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={ () => this.loginOut()}>退出登录</button>
      </div>
    );
  }
  loginOut() {
    const storage = window.localStorage
    storage.token = ''
    this.props.history.replace('/')
  }
}
export default JudgeJurisdiction(loginSuccess)

loginSuccess.propTypes = {
  history: PropTypes.object
}
