import React,{Component} from 'react';
import './sty.css';
import {browserHistory} from 'react-router';

let t=new Date().getTime();

class ComsItem extends Component{



	render(){

			return(
				
					<div style={{overflow:'hidden',marginLeft:'.6rem',borderTop:'1px solid #ccc'}}>
						<div onClick={()=>browserHistory.push('/details/'+this.props.val.user_id.id)} style={{paddingTop:'.2rem',fontSize:14}}>
							<img className="comshead" src={this.props.val.user_id.avatar_url}/>
							{this.props.val.user_id.nickname}{this.props.val.reply_id!=null?' 回复 '+this.props.val.reply_id.user_id.nickname:''}<br />
							<span style={{fontSize:12}}>18天前{this.props.val.like_count==0?'':' • '+this.props.val.like_count+'个赞'}</span>
							<span style={{fontSize:14,float:'right',marginLeft:'.6rem'}}>回复</span>
							<span style={{fontSize:14,float:'right'}}>赞</span>
						</div>
						<p style={{fontSize:14,marginLeft:'.2rem',lineHeight:'.5rem',wordWrap:'break-word'}}>
						{this.props.val.content_html.replace(/<[^>]+>/g,"")}
						</p>
					</div>

			)
	}
}

export default ComsItem;