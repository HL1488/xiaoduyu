import React,{Component} from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import {browserHistory} from 'react-router';
import './style.css'

class Item extends Component{

	render(){

		return(
			 <div>
		        <Card.Header onClick={()=>browserHistory.push('/details/'+this.props.val.user_id.id)} style={{borderTop:'1px solid #ddd'}}
		         thumb={this.props.val.user_id.avatar_url}
		        extra={<div><span style={{fontSize:14,color:'#000'}}>{this.props.val.user_id.nickname}</span><span>{this.props.val.reply_count==0?'':' ● '+this.props.val.reply_count+'个回复'}</span></div>}
		        thumbStyle={{width:'70%',borderRadius:'50%'}}/>
		        <p style={{margin:'.1rem 0',marginLeft:'.4rem',fontSize:14,wordBreak: 'break-all'}}>{this.props.val.content_html.replace(/<[^>]+>/g,"")}</p>

			  </div>
		)

	}
}

export default Item;