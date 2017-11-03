import React,{Component} from 'react';
import { List } from 'antd-mobile';
import Bar from '../comments/Bar.js';
import {browserHistory} from 'react-router';
import Head from './Head.js';
import {AJAX} from '../comments/AJAX.js';

const Item = List.Item;
const Brief = Item.Brief;


class HomePage extends Component{

	constructor(props){
		super(props);
		this.state={data:null}
	}

	state = {
    disabled: false,
  }
  handleLongPress = (e) => {
    console.log('longpress toggled', e);
  }

  componentDidMount() {
  	let This=this;
  	AJAX(
  			'get',
  			'https://www.xiaoduyu.com/api/v1/people/5996ab0765c0566225564b7e?_t=1504320224562',
  			'',
  			function(response){
  				let data=JSON.parse(response);
  				This.setState({data:data.data})
  			})
  		
  }
  render() {
	  	if(this.state.data!=null){
		    return (

		    	<div>
					<Head/>
			      <List className="my-list">
			        <Item onClick={function(){browserHistory.push('/details/1')}} extra={this.state.data.posts_count+' »'} onLongPress={this.handleLongPress}>我创建的帖子</Item>
			      </List>
			      <List className="my-list">
			        <Item onClick={function(){browserHistory.push('/details/3')}} extra={this.state.data.comment_count+' »'} onLongPress={this.handleLongPress}>我编写的评论</Item>
			      </List><br />
			      <List className="my-list">
			        <Item onClick={function(){browserHistory.push('/details/2')}} extra={this.state.data.follow_posts_count+' »'} onLongPress={this.handleLongPress}>我关注的帖子</Item>
			      </List>
			      <List onClick={function(){browserHistory.push('/details/4')}} className="my-list">
			        <Item extra={this.state.data.follow_topic_count+' »'} onLongPress={this.handleLongPress}>我关注的话题</Item>
			      </List>
			      <List className="my-list">
			        <Item onClick={function(){browserHistory.push('/details/5')}} extra={this.state.data.follow_people_count+' »'} onLongPress={this.handleLongPress}>我关注的人</Item>
			      </List>
			      <List className="my-list">
			        <Item onClick={function(){browserHistory.push('/details/6')}} extra={this.state.data.fans_count+' »'} onLongPress={this.handleLongPress}>我的粉丝</Item>
			      </List><br />
			      <List className="my-list">
			        <Item onClick={function(){browserHistory.push('/mydata')}} extra={'»'} onLongPress={this.handleLongPress}>设置</Item>
			      </List>
			      <Bar />
		    	</div>);
	    }else{
	    	return(<p>正在加载..........</p>)
	    }
	}
}

export default HomePage;