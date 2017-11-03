import React, {Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import List from './List.js';
import Bar from '../comments/Bar.js';

const TabPane = Tabs.TabPane;


class Classify extends Component{

	constructor(props){
		super(props);
		this.state={
			data:null,

		}
	}


	componentDidMount(){

		let head=new Headers();
		head.append('Content-Type','application/json');

		let setData={
			method:'GET',
			headers:head,
			mode:'cors',
			body:null,
			cache:'default'
		}
		let This=this;

		let path=`https://www.xiaoduyu.com/api/v1/topic?child=-1&page=0&per_page=30&_t=1504271302772`;
		fetch(path,setData)
		.then(function(response){
			return response.json()
		})
		.then(function(data){
			This.setState({data:data.data})
		})
	}


	render(){
		let arr=[];

		if(this.state.data!=null){

			this.state.data.forEach(function(value,index){
				arr.push(
					<TabPane tab={value.name} key={index+2} >
				      	<div>
							<List id={value._id}/>
				      	</div>
				      </TabPane>
				    )
			})

			return(
			 <div>
			    <WhiteSpace />
			    <Tabs defaultActiveKey="1" animated={true} swipeable={false} onTabClick={(this.handleTabClick)} pageSize={7}>
			      <TabPane tab="全部" key="1" >
			      	<div>
						<List id=''/>
			      	</div>
			      </TabPane>
			      {arr}
			    </Tabs>
			    <WhiteSpace />
			    <Bar/>
			  </div>
			)			
		}else{
			return(<p>正在加载..................</p>)
		}
		
	}
} 


export default Classify;
