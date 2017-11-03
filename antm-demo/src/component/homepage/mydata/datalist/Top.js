import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Top extends Component{

	render(){
			let sty={
		  		background:'#fff', 
		  		marginBottom:'.2rem',
		  		borderBottom:'1px solid #ccc',
		  		overflow:'hidden',
		  		padding:'.2rem'  	
		  	}
		return(
			<div>
				<div style={sty}>
					<span style={{fontSize:'.28rem'}} onClick={function(){browserHistory.push('/mydata')}}>返回</span>
					<p style={{margin:0,textAlign:'center'}}>{this.props.name}</p>
				</div>
			</div>
			)
	}
}

export default Top;