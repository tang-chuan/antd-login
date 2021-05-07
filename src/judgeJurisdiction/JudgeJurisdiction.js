import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { message } from "antd";

function JudgeJurisdiction(WarpoedComponent) {
  const storage = window.localStorage;
  return class centerComponent extends PureComponent {
    componentDidMount() {
      if (!storage.token) {
        message.warning("您还未登录，请先登录！");
      }
    }
    render() {
      {
        if (storage.token) {
          return <WarpoedComponent {...this.props} />;
        } else {
          return <Redirect to="/" exact />;
        }
      }
    }
  };
}

export default JudgeJurisdiction;
// const JudgeJurisdiction = (WarpoedComponent) => {
//   const storage = window.localStorage
//   return (props) => {
//     console.log(storage.token);
//     if(storage.token) {
//       return  <WarpoedComponent {...props} />
//     } else {
//       return <Redirect  to='/' exact/>
//     }
//   }

// }
