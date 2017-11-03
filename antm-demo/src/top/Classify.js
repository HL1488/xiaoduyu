import React, {Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Bar from './Bar.js';
import List from './List.js';
const TabPane = Tabs.TabPane;

function callback(key) {
  
}
function handleTabClick(key) {
 
}


class Classify extends Component{

	constructor(props){
		super(props);
		this.state={data:null}
	}


		componentDidMount() {
		
		let head=new Headers();
        head.append('Content-Type','application/json');

        let sendData={
            method:'GET',
            headers:head,
            mode:'cors',
            body:null,
            cache: 'default'
        }
        let path='https://www.xiaoduyu.com/api/v1/topic?child=1&parent_id=&page=0&per_page=30&_t=1504078365125';

        let This=this;

        fetch(path,sendData)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                This.setState({data});
            });
	}



	render(){

		
			let arr=[];
			if(this.state.data!=null){

				this.state.data.data.forEach(function(value,index){
						arr.push(<List key={index} data={value}/>)
				})

			return(
					<div>
				    <WhiteSpace />
				    <Tabs defaultActiveKey="1" animated={true} swipeable={true} onChange={callback} onTabClick={handleTabClick} pageSize={7}>
				      <TabPane tab="全部" key="1">
				        <div>
							{arr}
				        </div>
				      </TabPane>
				      <TabPane tab="探索" key="2">
				        <div>
				            {arr}
				        </div>
				      </TabPane>
				      <TabPane tab="职业" key="3">
				        <div>
				     
				        </div>
				      </TabPane>
				      <TabPane tab="技术" key="4">
				        <div>
			
				        </div>
				      </TabPane>
				      <TabPane tab="生活" key="5">
				        <div>
				
				        </div>
				      </TabPane>
				      <TabPane tab="小度" key="6">
				        <div>
				
				        </div>
				      </TabPane>
	                  <TabPane tab="游戏" key="">
				        <div>
				 
				        </div>
				      </TabPane>
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


export default Classify;
