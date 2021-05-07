import React, { Component } from "react";
// import store from "./store/index";
import { connect } from "react-redux";

import { loginAction, sendShoutMessageAction } from "./store/createActions";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Tabs,
  Dropdown,
  Menu,
  Spin,
  message,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailTwoTone,
  MobileTwoTone,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
  GithubOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import getLogin from "./service/index";
import logo from "./images/logo.f0355d39.svg";
import "./login.css";

const { TabPane } = Tabs;

const handleValidator = (rule, val) => {
  const myReg = /^[1][3,4,5,7,8][0-9]{9}$/;
  const validateResult = myReg.test(val); // 自定义规则
  if (!validateResult && val) {
    return Promise.reject();
  }
  return Promise.resolve();
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowIndex: "1",
      moverLang: false,
      visible: false,
      form: React.createRef()
    };
  }
  componentDidMount() {
    const storage = window.localStorage;
    if (storage.token) {
      this.props.history.replace("/home");
    }
  }
  render() {
    const menu = (
      <Menu onClick={(e) => this.handleMenuClick(e)}>
        <Menu.Item>
          <span>🇺🇸 English</span>
        </Menu.Item>
        <Menu.Item>
          <span>🇵🇱 Bahasa Indonesia</span>
        </Menu.Item>
        <Menu.Item>
          <span>🇧🇷 Português</span>
        </Menu.Item>
        <Menu.Item>
          <span>🇨🇳 简体中文</span>
        </Menu.Item>
        <Menu.Item>
          <span>🇭🇰 繁体中文</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="rootBox">
        <div className="header">
          <Dropdown
            overlay={menu}
            onVisibleChange={(e) => this.handleVisibleChange(e)}
            visible={this.state.visible}
          >
            <a className="antDropdownLink">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                    className="css-c4d79v"
                  ></path>
                </svg>
              </span>
            </a>
          </Dropdown>
        </div>
        {/* 中部 */}
        <div className="bodyer">
          <div className="logoBox">
            <div className="logoChildBox">
              <img className="logo" src={logo} alt=""></img>
              <span className="logoName">Ant Design</span>
            </div>
          </div>
          <div className="bodyerText">
            Ant Design 是西湖区最具影响力的 Web 设计规范
          </div>
          <div className="bodyerForLogin">
            <div className="inputBox">
              <Form
                ref={this.state.form}
                name="normalLogin"
                className="loginForm"
                initialValues={{
                  remember: true,
                }}
                onFinish={(e) => this.onFinish(e)}
              >
                <Tabs
                  defaultActiveKey="1"
                  onChange={(e) => this.getChangeType(e)}
                  centered
                >
                  <TabPane tab="账户密码登录" key="1">
                    {this.state.nowIndex === "1" ? (
                      <div>
                        <Form.Item
                          name="username"
                          style={{ textAlign: "left" }}
                          rules={[
                            {
                              required: true,
                              message: "用户名不能为空!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            prefix={<UserOutlined />}
                            placeholder="请输入用户名"
                          />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          style={{ textAlign: "left" }}
                          rules={[
                            {
                              required: true,
                              message: "密码不能为空!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="请输入密码"
                          />
                        </Form.Item>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </TabPane>
                  <TabPane tab="手机号登录" key="2">
                    {this.state.nowIndex === "2" ? (
                      <div>
                        <Form.Item
                          name="mobilePhone"
                          style={{ textAlign: "left" }}
                          rules={[
                            {
                              required: true,
                              message: "请输入手机号！",
                            },
                            {
                              validator: handleValidator,
                              message: "手机号格式错误!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            placeholder="手机号"
                            prefix={<MobileTwoTone className="inputIcon" />}
                          />
                        </Form.Item>
                        <Form.Item
                          name="message"
                          style={{ textAlign: "left" }}
                          rules={[
                            {
                              required: true,
                              message: "请输入验证码！",
                            },
                          ]}
                        >
                          <Row>
                            <Col
                              flex="2 1"
                              style={{ padding: "0 2px 0 0", float: "left" }}
                            >
                              <Input
                                size="large"
                                placeholder="验证码"
                                prefix={<MailTwoTone className="inputIcon" />}
                              />
                            </Col>
                            <Col
                              flex="1 2"
                              style={{ padding: "0 0 0 6px", float: "right" }}
                            >
                              <Spin
                                size="small"
                                spinning={
                                  this.props.countDownObj.countDownLoading
                                }
                              >
                                <Button
                                  style={{ width: "100%" }}
                                  disabled={this.props.countDownObj.isCountDown}
                                  size="large"
                                  onClick={() => this.getSixty()}
                                >
                                  {!this.props.countDownObj.isCountDown
                                    ? "点击获取"
                                    : `${this.props.countDownObj.countDown}秒后重新获取`}
                                </Button>
                              </Spin>
                            </Col>
                          </Row>
                        </Form.Item>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </TabPane>
                </Tabs>
                <Form.Item
                  className="loginFormRemember "
                  style={{ margenBottom: "20px" }}
                >
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    style={{ float: "left" }}
                  >
                    <Checkbox>自动登录</Checkbox>
                  </Form.Item>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{ float: "right" }}
                  >
                    忘记密码？
                  </a>
                </Form.Item>

                <Form.Item>
                  <Spin size="small" spinning={this.props.loading}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="loginFormButton"
                    >
                      提交
                    </Button>
                  </Spin>
                </Form.Item>
              </Form>
              <div className="otherLoginFunc">
                其他登录方式
                <AlipayCircleOutlined />
                <TaobaoCircleOutlined />
                <WeiboCircleOutlined />
              </div>
            </div>
          </div>
        </div>
        {/* 底部 */}
        <div className="footer">
          <div className="textBox">
            <Row
              style={{ width: "100%", marginBottom: "25px" }}
              justify="center"
            >
              <Row
                style={{ width: "80%", marginBottom: "10px" }}
                justify="space-around"
              >
                <Col>Ant Design Pro</Col>
                <GithubOutlined style={{ marginTop: "5px" }} />
                <Col>Ant Design</Col>
              </Row>
              <Row justify="space-around">
                <Col>Copyright</Col>
                <CopyrightOutlined
                  style={{ marginTop: "5px", width: "20px" }}
                />
                <Col>2019 蚂蚁金服体验技术部出品</Col>
              </Row>
            </Row>
          </div>
        </div>
      </div>
    );
  }

  async onFinish(values) {
    if (this.state.nowIndex === "1") {
      const data = {
        userName: values.username,
        password: values.password,
      };
      let result = getLogin(data)
      await this.props.loginAction(result);
      result.then(
        (res) => {
          if (res.result === "success") {
            let storage = window.localStorage;
            storage.token = res.message.token;
            message.success("登录成功！");
            this.props.history.replace("/home");
          } else {
            message.error(res.code);
          }
        },
        () => {
          message.error("网络错误，请重试！");
        }
      );
    }
    if (this.state.nowIndex === "2") {
      const data = {
        mobilePhone: values.mobilePhone,
        message: values.message,
      };
      console.log(data);
      await this.props.loginAction(Promise.resolve({token:'DFGHJKGUGJCFGFGJKJHTFGJHKJKJHGDFHGJHKJUYYJ'}));
      setTimeout(() => {
        let storage = window.localStorage;
        storage.token = 'DFGHJKGUGJCFGFGJKJHTFGJHKJKJHGDFHGJHKJUYYJ';
        message.success("登录成功！");
        this.props.history.replace("/home");
      },2000);
    }
  }

  getSixty() {
    this.state.form.current
      .validateFields(["mobilePhone"])
      .then(()=>{
        this.props.sendMessage(message);
      }).catch((err) =>{
        console.log(err);
      })
      
  }

  handleVisibleChange(e) {
    this.setState({ visible: e });
  }

  handleMenuClick() {
    this.setState({ visible: false });
  }

  getChangeType(index) {
    this.setState({
      nowIndex: index,
    });
  }

  chooseAliPay() {
    this.setState({
      aliPay: !this.state.aliPay,
    });
  }

  // 底部登录方式
  chooseTaoBao() {
    this.setState({
      taobao: !this.state.taobao,
    });
  }

  chooseWeiBo() {
    this.setState({
      weibo: !this.state.weibo,
    });
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  countDownObj: state.countDownObj,
});
const mapDispachToProp = (dispatch) => ({
  loginAction(promise) {
    dispatch(loginAction(promise));
  },
  sendMessage(message) {
    dispatch(sendShoutMessageAction(message))
  }
});

export default connect(mapStateToProps, mapDispachToProp)(Login);

Login.propTypes = {
  loginAction: PropTypes.func,
  countDownAction: PropTypes.func,
  history: PropTypes.object,
  countDownObj: PropTypes.object,
  loading: PropTypes.bool,
  sendMessage: PropTypes.func
};
