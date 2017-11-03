import React,{Component} from 'react';
import Top from './Top';

class Show extends Component{

	render(){
		let sty={
			height:'1rem',
			lineHeight:'1rem', 
			marginBottom:'.1rem',
			background:'#fff',
			padding:'0 .6rem',
			textAlign:'center',

		}
		let sty2={
			width:'96%',
			marginLeft:'1%',
			height:'3rem',
			resize:'none',
			border:'1px solid #ccc',

		}
		return(
				<div>
					<Top name="个性签名"/>
					<div style={{overflow:'hidden'}}>
					<textarea style={sty2}></textarea>
					<p style={sty}>确定</p>
					</div>
				</div>
			)
	}
}

export default Show;