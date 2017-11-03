import React,{Component} from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import {browserHistory} from 'react-router';
import Item from './Item.js';
import './style.css'


class List extends Component{


	

	render(){

		let path=`/comment/${this.props.val._id}`;

		if(this.props.val.comment.length>0){
			let arr=[]

			this.props.val.comment.forEach(function(value,index){
					arr.push(<Item key={index} val={value} />)
			})

			
			return(
				 <div>
				    <WhiteSpace size="lg" />
				    <Card>
				      <Card.Header  onClick={()=>browserHistory.push('/details/'+this.props.val.user_id.id)}
				        thumb={this.props.val.user_id.avatar_url}
				        extra={<div>
				        	<span style={{fontSize:16,color:'#000',paddingBottom:'.2rem'}}>
				        	{this.props.val.user_id.nickname}</span><br/>
					        <span>
					        {this.props.val.topic_id.name} ● {this.props.val.view_count}次浏览 {this.props.val.follow_count==0?'':'● '+this.props.val.follow_count+'人关注'}</span>
				        </div>}
				        thumbStyle={{width:'90%'}}
				      />
				      <Card.Body>
				        <div onClick={()=>{browserHistory.push(path)}}>
				        	<p style={{fontWeight:'bold'}}>{this.props.val.title}</p>
				        	<p style={{ wordBreak: 'break-all'}}>{this.props.val.content_html.replace(/<[^>]+>/g,"")}</p>
				        </div>
				        {arr}
				      </Card.Body>
				      <Card.Footer  onClick={()=>{browserHistory.push(path)}} style={{fontSize:14,color:'#333',borderTop:'1px solid #ddd',padding:0,textAlign:'center',lineHeight:2,marginTop:'.2rem'}} content={this.props.val.comment_count==0?'':'共'+(this.props.val.comment_count)+'条回复,点击查看全部'}/>
				    </Card>
				  </div>
			)
		}else{
			return(
				<div onClick={()=>browserHistory.push(path)}>
				    <WhiteSpace size="lg" />
				    <Card>
				      <Card.Header
				        thumb={this.props.val.user_id.avatar_url}
				        extra={<div>
				        	<span style={{fontSize:16,color:'#000'}}>
				        	{this.props.val.user_id.nickname}</span><br/>
					        <span>
					        {this.props.val.topic_id.name} ● {this.props.val.view_count}次浏览 {this.props.val.follow_count==0?'':'● '+this.props.val.follow_count+'人关注'}</span>
				        </div>}
				        thumbStyle={{width:'90%'}}
				      />
				      <Card.Body>
				        <div onClick={()=>{browserHistory.push(path)}}>
				        	<p style={{fontWeight:'bold'}}>{this.props.val.title}</p>
				        	<p style={{ wordBreak: 'break-all'}}>{this.props.val.content_html.replace(/<[^>]+>/g,"")}</p>
				        </div>
				      </Card.Body>
				      <Card.Footer content={<div/>}/>
				    </Card>
				  </div>
			)
		}
		
		
	}
}

export default List;