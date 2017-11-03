import React, {Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Bar from '../top/Bar.js' 
import Hcce from './Hccey.js';

// const Tchi =Tabs.Tchi;
// function callback(key){
//  }
//  function handleTabClick(key){

//  }
 const TabPane=Tabs.TabPane;
 function callback(key){

 }
 function handleTabClick(key){

 }
 class Hce extends Component{
 	constructor(props){
 		super(props);
 		this.state={data:null}
 	}




	componentDidMount() {
		//组件部分安装
		let head=new Headers();
		//头部 新的 头文件
        head.append('Content-Type','application/json');
        //头部附加（）
        let sendData={
        	//发送数据
            method:'GET',
            //方法是GET
            headers:head,
            //头文件的头部
            mode:'cors',
            //方式
            body:null,
            cache: 'default'
            //隐藏
        }
        let path='https://www.xiaoduyu.com/api/v1/posts?topic_id=588cb9a2e0b53fc80c0ed54f&per_page=30&_t=1504449764073';

        let This=this;

        fetch(path,sendData)
        //路径发送数据
            .then(function(response) {
                return response.json();
                //返回对象符号
            })
            .then(function(data) {

                This.setState({data});
                //当前的状态是数据
            });
	}



	render(){
		let arr=[];
		if(this.state.data!=null){
			this.state.data.data.forEach(function(value,index){
				arr.push(<TabPane tab={value.name} key={index+2}><div><Hcce id={value._id}/></div></TabPane>)
			})
	

			return(
					<div>
				    <WhiteSpace />
				    <Tabs defaultActiveKey="1" animated={true} swipeable={true} 
				    onChange={callback} onTabClick={handleTabClick} pageSize={29}>
				      
				      
				        <div>
				        	<Hcce id=''/>
				        </div>
	
				      	{arr}
				    </Tabs>
				    <WhiteSpace />
				    <Bar/>
				  </div>
				)
			}else{
				return(
					<p>正在加载...............</p>
				)
			}

			 
	}
} 


export default Hce;