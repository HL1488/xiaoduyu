import React, {Component} from 'react';
import {Button} from 'antd-mobile';
import {Link,browserHistory} from 'react-router';
import Bar from '../comments/Bar.js';
import './style.css';

class Login extends Component{

	render(){

		let sty={marginLeft:'.4rem'}
		return(

			<div className="logins">
				<h4 style={{background:'#108ee9',color:'#fff',margin:0,lineHeight:'1rem', textAlign:'center'}}>用户登录</h4>
				
				<div style={{margin:'.4rem 0'}}><span style={sty}>账号：</span><input type="text" /></div>
				<div><span style={sty}>密码：</span><input type="password" /></div>
				<p style={{fontSize:14,margin:'.2rem 0',padding:'0 .4rem'}}>
					<span style={{}}>忘记密码</span>
					<Link to="/register" style={{float:'right'}}>没有账号？注册</Link>
				</p>
				<Button style={{marginTop:'.6rem'}} onClick={()=>browserHistory.push('/homepage')} className="btn btns" type="primary">登录</Button>
				<Bar />
			</div>
			)
	}
}
export default Login; 