import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Button} from 'antd-mobile';
import './style.css';

class MyData extends Component {
  render() {

  	let sty={
  		background:'#fff', 
  		marginBottom:'.2rem',
  		borderBottom:'1px solid #ccc',
  		overflow:'hidden',
  		padding:'.2rem'  	
  	}
  	let sty2={
  		background:'#c00',
  		width:'90%',
  		marginLeft:'5%',
  		marginTop:'1rem',
  		border:'none'
  	}
    return (
      <div>
  		<div style={sty}>
  			<span style={{fontSize:'.28rem'}} onClick={function(){browserHistory.push('/homepage')}}>返回</span>
  			<p style={{margin:0,textAlign:'center'}}>设置</p>
  		</div>
			<ul className="data">
				<li onClick={()=>browserHistory.push('/myhead')}><span>头像</span> <img src={localStorage.url} className="show sethead"/></li>
				<li><span>修改名字</span> <span className="show">23天23小时43分钟后才能修改</span></li>
				<li onClick={()=>browserHistory.push('/sex')}><span>性别</span> <span className="show">男</span></li>
				<li onClick={()=>browserHistory.push('/show')}><span>个性签名</span> <span className="show">»</span></li><br/>
				<li><span>邮箱</span> <span className="show">未绑定»</span></li>
				<li><span>QQ</span> <span className="show">未绑定»</span></li>
				<li><span>微信</span> <span className="show">未绑定»</span></li>
			</ul>
			<Button onClick={function(){browserHistory.push('/')}} style={sty2} className="btn" type="primary">退出登录</Button>
    	</div>
    );
  }
}

export default MyData;
