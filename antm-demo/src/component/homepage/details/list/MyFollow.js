import React,{Component} from 'react';
import {browserHistory} from 'react-router';

let sty={

	width:'.8rem',
	height:'.8rem',
	borderRadius:'50%',
	float:'left',
	marginRight:'.2rem',

}


class MyFollow extends Component{

	render(){

		let info=this.props.val.user_id.fans_count+'粉丝'+this.props.val.user_id.comment_count+'帖子'
		return(
			<div style={{overflow:'hidden',background:'#fff',borderBottom:'1px solid #ccc',padding:'.2rem .2rem'}}>
				<img onClick={()=>browserHistory.push('/details/'+this.props.val.user_id.id)} style={sty} src={this.props.val.user_id.avatar_url}/>
				{this.props.val.user_id.nickname}<br/>
				<span style={{fontSize:12,color:'#333'}}>
				{info}
				</span>
				<span style={{float:'right',padding:'.1rem .3rem',background:'skyblue',color:'#fff',marginTop:'-.2rem'}}>
				{this.props.val.user_id.follow?'关注他':'已关注'}
				</span>
			</div>
		
			)
			
	}
}

export default MyFollow;