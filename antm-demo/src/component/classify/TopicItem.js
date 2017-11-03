import React,{Component} from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import {browserHistory} from 'react-router';
import './style.css'

class TopicItem extends Component{

	render(){

			let path=`/comment/${this.props.val._id}`;

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
					      </Card.Body>
					    </Card>
				   
				  </div>
			)
		
	}
}

export default TopicItem;