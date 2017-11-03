import React,{Component} from 'react';
import Head from '../Head.js';
import Bar from '../../comments/Bar.js';
import { Tabs, WhiteSpace } from 'antd-mobile';
import './style.css';
import TopicItem from '../../classify/TopicItem.js';
import Items from '../../classify/Item.js';
import FollowT from './list/FollowT.js';
import FollowP from './list/FollowP.js';
import MyFollow from './list/MyFollow.js';
import Comments from '../../home/comment/Comments.js';

const TabPane = Tabs.TabPane;





class Details extends Component{


	constructor(props){
    super(props);
    this.state={
      data:null,
      num:this.props.params.key-1?this.props.params.key-1:0,
      id:null
    }
  }

  req=(paths)=>{

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

     let path=paths;
    fetch(path,setData)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      This.setState({data:data.data})
    })

  }

  componentDidMount(){
  	let id=this.props.params.key.length>1?this.props.params.key:'5996ab0765c0566225564b7e';
  	

  		let path=[
	`https://www.xiaoduyu.com/api/v1/posts?user_id=${id}&per_page=30&_t=1504424421030`,
	`https://www.xiaoduyu.com/api/v1/follow?user_id=${id}&posts_exsits=1&page=0&per_page=20&_t=1504424411133`,
	`https://www.xiaoduyu.com/api/v1/comments?user_id=${id}&parent_exists=0&sortBy=create_at&sort=-1&gt_create_at=0&per_page=30&_t=1504425483712`,
	`https://www.xiaoduyu.com/api/v1/topic?people_id=${id}&child=1&page=0&per_page=30&_t=1504425488550`,
	`https://www.xiaoduyu.com/api/v1/follow?user_id=${id}&people_exsits=1&page=0&per_page=30&_t=1504425753506`,
	`https://www.xiaoduyu.com/api/v1/follow?people_id=${id}&page=0&per_page=20&_t=1504536497462`

]
      this.req(path[this.state.num])
    
  }

  handleTabClick=(key)=>{
  	let id=this.props.params.key.length>1?this.props.params.key:'5996ab0765c0566225564b7e';

  	let path=[
	`https://www.xiaoduyu.com/api/v1/posts?user_id=${id}&per_page=30&_t=1504424421030`,
	`https://www.xiaoduyu.com/api/v1/follow?user_id=${id}&posts_exsits=1&page=0&per_page=20&_t=1504424411133`,
	`https://www.xiaoduyu.com/api/v1/comments?user_id=${id}&parent_exists=0&sortBy=create_at&sort=-1&gt_create_at=0&per_page=30&_t=1504425483712`,
	`https://www.xiaoduyu.com/api/v1/topic?people_id=${id}&child=1&page=0&per_page=30&_t=1504425488550`,
	`https://www.xiaoduyu.com/api/v1/follow?user_id=${id}&people_exsits=1&page=0&per_page=30&_t=1504425753506`,
	`https://www.xiaoduyu.com/api/v1/follow?people_id=${id}&page=0&per_page=20&_t=1504536497462`

]
  	this.setState({data:null})
  	this.req(path[key-1]);
  	this.setState({num:key-1});
  }

 componentWillReceiveProps=(props)=> {

 	let id=props.params.key;

 	let path=[
	`https://www.xiaoduyu.com/api/v1/posts?user_id=${id}&per_page=30&_t=1504424421030`,
	`https://www.xiaoduyu.com/api/v1/follow?user_id=${id}&posts_exsits=1&page=0&per_page=20&_t=1504424411133`,
	`https://www.xiaoduyu.com/api/v1/comments?user_id=${id}&parent_exists=0&sortBy=create_at&sort=-1&gt_create_at=0&per_page=30&_t=1504425483712`,
	`https://www.xiaoduyu.com/api/v1/topic?people_id=${id}&child=1&page=0&per_page=30&_t=1504425488550`,
	`https://www.xiaoduyu.com/api/v1/follow?user_id=${id}&people_exsits=1&page=0&per_page=30&_t=1504425753506`,
	`https://www.xiaoduyu.com/api/v1/follow?people_id=${id}&page=0&per_page=20&_t=1504536497462`

]

 	    // console.log( props.params.key ); //5996ab0765c0566225564b7e

      // console.log(this.props.params.key );//586658ea1985b4532700fd0a

        if (props && this.props.params.key != props.params.key) {
        	// this.componentDidMount();
        	// this.setState({id:this.props.params.id})
        	this.req(path[this.state.num])
        }
    }

	render(){
		var arr=[]
		let num=this.state.num;
		let key=this.props.params.key;
		if(this.state.data!=null){
			this.state.data.forEach(function(value,index){
					
					if(num==0){
						arr.push(<TopicItem key={index} val={value}/>)
					}else if(num==1){
						arr.push(<FollowT key={index} val={value}/>)
					}else if(num==2){
						arr.push(<Comments key={index} val={value} />)
					}else if(num==3){
						arr.push(<Items key={index} val={value}/>)
					}else if(num==4){
						arr.push(<FollowP key={index} val={value}/>)
					}else{
						arr.push(<MyFollow key={index} val={value}/>)
					}
					
			})
		}
			return(

			  <div>
			  	<Head id={this.props.params.key}/>
			    <div>
				    <WhiteSpace />
				    <Tabs defaultActiveKey={key} animated={true} swipeable={true} onTabClick={this.handleTabClick} pageSize={6}>
				      <TabPane tab="帖子" key="1">
				        <div>
				          {arr}
				        </div>
				      </TabPane>
				      <TabPane tab="关注的帖" key="2">
				        <div>
				          {arr}
				        </div>
				      </TabPane>
				      <TabPane tab="评论" key="3">
				        <div>
				          {arr}
				        </div>
				      </TabPane>
				      <TabPane tab="话题" key="4">
				        <div>
				          {arr}
				        </div>
				      </TabPane>
				      <TabPane tab="关注的人" key="5">
				        <div>
				          {arr}
				        </div>
				      </TabPane>
				      <TabPane tab="粉丝" key="6">
				        <div>
				          {arr}
				        </div>
				      </TabPane>
				    </Tabs>
				    <WhiteSpace />
				  </div>
				  <Bar/>
			  </div>
			)

	}
}



export default Details;