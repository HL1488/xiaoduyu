import React,{Component} from 'react';
import './sty.css';
import ComsItem from './ComsItem.js';
import {browserHistory} from 'react-router';


class Comments extends Component{



	render(){
		
			if(this.props.val.reply!=null){
				let arr=[]
				this.props.val.reply.forEach(function(value,index){
					arr.push(<ComsItem key={index} val={value} />)
				})


			return(
				
					<div style={{padding:'.2rem',overflow:'hidden',margin:0,borderBottom:'1px solid #ccc'}}>
						<div onClick={()=>browserHistory.push('/details/'+this.props.val.user_id.id)} style={{paddingTop:'.2rem'}}>
							<img className="comshead" src={this.props.val.user_id.avatar_url}/>
							{this.props.val.user_id.nickname}<br />
							<span style={{fontSize:12}}>18天前{this.props.val.like_count==0?'':' • '+this.props.val.like_count+'个赞'}</span>
							<span style={{fontSize:14,float:'right',marginLeft:'.6rem'}}>回复</span>
							<span style={{fontSize:14,float:'right'}}>赞</span>
						</div>
						<p style={{fontSize:14,margin:'.1rem .2rem',lineHeight:'.5rem',wordWrap:'break-word'}}>
						{this.props.val.content_html.replace(/<[^>]+>/g,"")}
						</p>
						{arr}
					</div>

			)
		}else{
			return(<p>正在加载..........</p>)
		}
	}
}

export default Comments;