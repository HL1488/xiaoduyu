import React, {Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

import './style.css';
import List from './List.js';
import Bar from '../comments/Bar.js';

const TabPane = Tabs.TabPane;

function callback(key) {
  
}
function handleTabClick(key) {
 
}


class Classify extends Component{

	constructor(props){
		super(props);
	}


	render(){

		return(

			 <div>
			    <WhiteSpace />
			    <Tabs defaultActiveKey="1" animated={true} swipeable={true} onChange={callback} onTabClick={handleTabClick} pageSize={6}>
			      <TabPane tab="全部" key="1">
			        <div>
			           <List />
			        </div>
			      </TabPane>
			      <TabPane tab="探索" key="2">
			        <div>
			           <List />
			        </div>
			      </TabPane>
			      <TabPane tab="职业" key="3">
			        <div>
			           <List />
			        </div>
			      </TabPane>
			      <TabPane tab="技术" key="4">
			        <div>
			           <List />
			        </div>
			      </TabPane>
			      <TabPane tab="生活" key="5">
			        <div>
			           <List />
			        </div>
			      </TabPane>
			      <TabPane tab="小度" key="6">
			        <div>
			           <List />
			        </div>
			      </TabPane>
			    </Tabs>
			    <WhiteSpace />
			    <Bar/>
			  </div>
			)
	}
} 


export default Classify;
