import React, { PureComponent } from "react";
import JudgeJurisdiction from '../judgeJurisdiction/JudgeJurisdiction';
import "./about.css";

class about extends PureComponent {
  render() {
    return (
      <div style={{width:'300px',height:'300px',display:'flex',background:'black',justifyContent:'space-between'}}>
        <div style={{width:'100px',height:'100px',background:'red',borderRadius: '50%',}}></div>
        <div style={{width:'100px',height:'100px',background:'red',alignSelf: 'flex-end',borderRadius: '50%'}}></div>       
      </div>
    );
  }
}

export default JudgeJurisdiction(about)