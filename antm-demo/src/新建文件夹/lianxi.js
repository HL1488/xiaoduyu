import React from 'react';
import ReactDOM from 'react-dom';
const Ttem = List.Item;
const Brief = Brief;
class Three extends React.Component{
	state={
		disabled:false,
	}
	handleLongPress=(e)=>{

	}
	componentDidMount(){
		ReactDOM.findDOMNode(this.refs.text).innerHTML=this.props.val.content_html;
	}
	render(){
		return(
			<div>
			<Item>
             <img src={this.props.val.user_id.avatar_url}/>
             <span></span>
			</Item>


			</div>
			)
	}
}










// import React, {Component} from 'react';
// import { Tabs, WhiteSpace } from 'antd-mobile';
// const Tabpane=Tabs.TabPane;
// function callback(key){

// }
// function handleTabClick(key){

// }
// class Classify extends Component{
// 	constuctor(props){
// 		super(props);
// 		this.state={data:null}
// }

// componentDidMount() {
		
// 		let head=new Headers();
//         head.append('Content-Type','application/json');

//         let sendData={
//             method:'GET',
//             headers:head,
//             mode:'cors',
//             body:null,
//             cache: 'default'
//         }
//         let path='https://www.xiaoduyu.com/api/v1/topic?child=-1&page=0&per_page=30&_t=1504147535038';
//         let This=this;

//         fetch(path,sendData)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {

//                 This.setState({data});
//             });
// 	}




//      render(){

//      	let arr=[];
//      	if(this.state.data!=null){
//      		this.state.data.data.forEach(function(value,index){
//      			arr.push(<TabPane tab={value.name} key={index+2}><div><List id={value._id} /></div></TabPane>)
//      		})
// 			return(
// 					<div>
// 				    <WhiteSpace /> 
// 				    <Tabs defaultActiveKey="1" animated={true} swipeable={true} onChange={callback} onTabClick={handleTabClick} pageSize={7}>
				      
// 				      <TabPane tab="全部" key="1">
// 				        <div>
// 				        	<List id=''/>
// 				        </div>
// 				      </TabPane>
// 				      	{arr}
// 				    </Tabs>
// 				    <WhiteSpace />
// 				    <Bar/>
// 				  </div>
// 				)
// 			}else{
// 				return(
// 					<p>正在加载...............</p>
// 				)
// 			}

			 
// 	}
// } 


// export default Classify;












// // const TabPane = Tabs.TabPane;
// // function Callback(key){

// // }
// // function handleTabClick(key){

// // }
// // class Classty extebds Component{
// // 	constructor(props){
// // 		super(props);
// // 		this.state={data:null}
// // 	}


// //    componentDidMount() {	
// // 		let head=new Headers();
// //         head.append('Content-Type','application/json');

// //         let sendData={
// //             method:'GET',
// //             headers:head,
// //             mode:'cors',
// //             body:null,
// //             cache: 'default'
// //         }
// //         let path='https://www.xiaoduyu.com/api/v1/topic?child=-1&page=0&per_page=30&_t=1504147535038';
//         let This=this;

//         fetch(path,sendData)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {

//                 This.setState({data});
//             });
// 	}


//        render(){
//        	let arr=[];
//        	if(this.state.data!=null){
//        		this.state.data.data.forEach(function(value,index){
//        			arr.push(<TabPane tab={value.name} key={index+2}><div><List id={value._id} /></div></TabPane>)
//        		})
//        	}
// 			return(
// 					<div>
// 				    <WhiteSpace /> 
// 				    <Tabs defaultActiveKey="1" animated={true} swipeable={true} onChange={callback} onTabClick={handleTabClick} pageSize={7}>
				      
// 				      <TabPane tab="全部" key="1">
// 				        <div>
// 				        	<List id=''/>
// 				        </div>
// 				      </TabPane>
// 				      	{arr}
// 				    </Tabs>
// 				    <WhiteSpace />
// 				    <Bar/>
// 				  </div>
// 				)
// 			}else{
// 				return(
// 					<p>正在加载...............</p>
// 				)
// 			}

			 
// 	}
// } 


// export default Classify;







// const TabPane =Tabs.TabPane;
// function callback(key){

// }
// function handleTabClick(key){

// }
// class Classify extends Component{
// 	constructor(props){
// 		super(peops);
// 		this.state={data:null}
// 	}

//    componentDidMount() {	
// 		let head=new Headers();
//         head.append('Content-Type','application/json');

//         let sendData={
//             method:'GET',
//             headers:head,
//             mode:'cors',
//             body:null,
//             cache: 'default'
//         }
//         let path='https://www.xiaoduyu.com/api/v1/topic?child=-1&page=0&per_page=30&_t=1504147535038';
//         let This=this;

//         fetch(path,sendData)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {

//                 This.setState({data});
//             });
// 	}

//      render(){
//      	let arr=[];
//      	if(this.state.data!=null){
//      		this.state.data.data.forEach(function(value,index){
//      			arr.push(<TabPane tab={value.name} key={index+2}><div><List id={value._id} /></div></TabPane>)
//      		})
// 			return(
// 					<div>
// 				    <WhiteSpace />
// 				    <Tabs defaultActiveKey="1" animated={true} swipeable={true} onChange={callback} onTabClick={handleTabClick} pageSize={7}>
				      
// 				      <TabPane tab="全部" key="1">
// 				        <div>
// 				        	<List id=''/>
// 				        </div>
// 				      </TabPane>
// 				      	{arr}
// 				    </Tabs>
// 				    <WhiteSpace />
// 				    <Bar/>
// 				  </div>
// 				)
// 			}else{
// 				return(
// 					<p>正在加载...............</p>
// 				)
// 			}

			 
// 	}
// } 


// export default Classify;


















// const TabPane = Tabs.TabPane;
// function callback(key){

// }
// function handleTabClick(key){

// }
// class Cliassify extends Component{
// 	constructor(props){
// 		super(props);
// 		this.statr={data:null}
// 	}
// }

// componentDidMount() {
		
// 		let head=new Headers();
//         head.append('Content-Type','application/json');

//         let sendData={
//             method:'GET',
//             headers:head,
//             mode:'cors',
//             body:null,
//             cache: 'default'
//         }
//         let path='https://www.xiaoduyu.com/api/v1/topic?child=-1&page=0&per_page=30&_t=1504147535038';
//         let This=this;

//         fetch(path,sendData)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {

//                 This.setState({data});
//             });
//           }

//           render(){
//                   let arr=[];
//                   if(this.state.data!=null){
//                   	this.state.data.data.forEach(function(value,index){
//                   		arr.push(<TabPane tab={value.name} key={index+2}><div><List id={value._id}/></div></TabPane>)
//                   	})
                  

//             	return(
// 					<div>
// 				    <WhiteSpace />
// 				    <Tabs defaultActiveKey="1" animated={true} swipeable={true} onChange={callback} onTabClick={handleTabClick} pageSize={7}>
				      
// 				      <TabPane tab="全部" key="1">
// 				        <div>
// 				        	<List id=''/>
// 				        </div>
// 				      </TabPane>
// 				      	{arr}
// 				    </Tabs>
// 				    <WhiteSpace />
// 				    <Bar/>
// 				  </div>
// 				)
// 			}else{
// 				return(
// 					<p>正在加载...............</p>
// 				)
// 			}

			 
// 	}
// } 


// export default Classify;
