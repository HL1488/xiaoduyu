import React,{Component} from 'react';
import { List, InputItem,Button, WhiteSpace } from 'antd-mobile';
import Bar from '../comments/Bar.js';
import './style.css';
class Register extends React.Component {

  render() {
    return (
      <div>
        <List renderHeader={() => '用户注册'}>
          <br/><Button style={{background:'#c00'}} className="btn btns" type="primary">使用QQ登录</Button>
          <Button style={{background:'green'}} className="btn btns" type="primary">使用微信登录</Button>
          <InputItem
            placeholder="username"
          >用户名</InputItem>
          <InputItem
            placeholder="emil"
          >邮箱</InputItem>
           <InputItem
            placeholder="password"
            type="password"
          >密码</InputItem>
          <InputItem
            placeholder="password"
            type="password"
          >确认密码</InputItem><br/>
          
          </List>
          <p style={{marginLeft:'.2rem'}}>男<input type="radio" name="sex"/>  女<input type="radio" name="sex"/></p>
          <Button className="btn btns" type="primary">注册</Button>
          <Bar />
       </div>
          
    );
  }
}

///const Register = createForm()(BasicInputExample);

export default Register;
