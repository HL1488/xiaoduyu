import React,{Component} from 'react';
import {browserHistory} from 'react-router';


class FollowT extends Component{

	render(){
		return(
			<h5 onClick={()=>browserHistory.push('/comment/'+this.props.val.posts_id._id)} style={{padding:'.2rem .2rem',background:'#fff',margin:'.1rem 0'}}>{this.props.val.posts_id.title}</h5>
		
			)
			
	}
}

export default FollowT;