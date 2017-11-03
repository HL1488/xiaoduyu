import React, { Component } from 'react';
import Item from './Item.js';
import Bar from '../comments/Bar.js';
import {AJAX} from '../comments/AJAX.js';
import './style.css';




class News extends Component {

  constructor(props){
    super(props);
    this.state={data:null}
  }

  componentDidMount() {

    let data={
      "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNTk5NmFiMDc2NWMwNTY2MjI1NTY0YjdlIiwiZXhwaXJlcyI6MTUwNjkxMjE3NTUyNywiYWNjZXNzX3Rva2VuIjoiZGE0OGMxOWMtODQ1OS00NDNmLTlhMDctZTM1ZjdiNGZmNWU1In0.EspzhudgkBEEq5s5Hb4s93YsN4lDBpbziybQGXxXUCo",
      "lt_create_at":"1504253321601",
      "per_page":"30"
      }
      let body=JSON.stringify(data);
    let This=this;
    AJAX(
      "post",
      "https://www.xiaoduyu.com/api/v1/notifications",
      body,
    function(data){
        This.setState({data:(JSON.parse(data)).data});
    });

  }
  render() {
    if(this.state.data!=null){
    	var arr=[];
    	this.state.data.forEach(function(value,index){
    		arr.push(<Item key={index} val={value}/>)
    	})
      return (
        <div>
        <h4 style={{textAlign:'center', margin:0,padding:'.3rem 0',background:'#108ee9',color:'#fff'}}>消息通知</h4>
        <div style={{paddingBottom:'.5rem'}}>
          {arr} 
        </div>
  		<Bar />	
        </div>
      );
    }else{
      return(<p>正在加载..........</p>)
    }
  }
}

export default News;
