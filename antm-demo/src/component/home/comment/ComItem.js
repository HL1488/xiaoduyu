import React,{Component} from 'react';
import {browserHistory} from 'react-router';
import Comments from './Comments.js';
import './style.css';
import {AJAX} from '../../comments/AJAX.js';


class ComItem extends Component{

	constructor(props){
		super(props);
		this.state={data:null}
	}

	componentDidMount() {
		let This=this;

		AJAX(
			'get',
			`https://www.xiaoduyu.com/api/v1/posts`,
			`posts_id=${this.props.id}&per_page=1&draft=1&restart=true`,
			function(response){
				let data=JSON.parse(response);
				This.setState({data:data.data[0]})
			})
			
	}


	render(){
		if(this.state.data!=null){
			return(
				
					<div style={{background:'#fff'}}>
						<p style={{textAlign:'center', margin:0,padding:'.3rem .3rem',background:'#108ee9',color:'#fff',height:'.2rem'}}>
						<span style={{fontSize:14,float:'left', fontWeight:200}} onClick={()=>browserHistory.push('/home')}>« 返回首页</span>
						</p>
						<div>
							<div style={{padding:'0 .3rem',overflow:'hidden',margin:0,background:'#fff'}}>
								<div onClick={()=>browserHistory.push('/details/'+this.state.data.user_id.id)} style={{paddingTop:'.2rem'}}>
									<img className="comhead" src={this.state.data.user_id.avatar_url}/>
									{this.state.data.user_id.nickname}<br />
									 <span style={{fontSize:12}}>{this.state.data.topic_id.name} ● {this.state.data.view_count}次浏览 {this.state.data.follow_count==0?'':'● '+this.state.data.follow_count+'人关注'}</span>

								</div>
								<h4 style={{lineHeight:'.6rem',marginBottom:0}}>
								<span>{this.state.data.title}</span>
								</h4>

								<p style={{fontSize:'.28rem',lineHeight:'.5rem'}}>
								{this.state.data.content_html.replace(/<[^>]+>/g,"")}
								</p>
								
							</div>
							<div className="foot">
								<p style={{float:'left'}}><span>QQ</span><span>微信</span><span>微博</span></p>
								<p style={{float:'right'}}><span>赞</span><span>关注</span><span>评论</span></p>
							</div>
						</div>
						<div className="enter">
							<input type="text" placeholder="说点什么.............."/>
							<button>回复</button>
						</div>
					</div>

					)

		}else{
					return(<p>正在加载.............</p>)
				}

			
	}
}

export default ComItem;