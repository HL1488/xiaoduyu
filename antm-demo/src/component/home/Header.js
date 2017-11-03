import React,{Component} from 'react';
import {Link} from 'react-router'
import './header.css';


class Header extends Component{

	render(){

		return(
			<div className="header">
				<p>
					<Link to="/text">说说</Link>
					<Link to="/text">提问</Link>
					<Link to="/text">写文章</Link>
				</p>
				<div>
					<span>最新动态</span>
					<span style={{float:'right'}}>
						评论:<select style={{background:'#fff'}}>
							<option>最新</option>
							<option>回复最多</option>
							<option>点赞最多</option>
						</select>
					</span>
				</div>
			</div>

			)
	}
}

export default Header;