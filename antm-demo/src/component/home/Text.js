import React,{Component} from 'react';
import './text.css';
import {Button} from 'antd-mobile';
import Bar from '../comments/Bar.js'

class Text extends Component{

	render(){

		return(
			<div>
				<div className="text">
					<h4><span>选择话题</span><input type="text"/></h4>
					<div>
						<textarea></textarea>
					</div>
					<Button style={{marginTop:'.6rem'}} className="btn btns" type="primary">发表</Button>
				</div>
				<Bar />
			</div>
			

			)
	}
}

export default Text;