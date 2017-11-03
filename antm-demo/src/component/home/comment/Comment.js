import React,{Component} from 'react';
import {browserHistory} from 'react-router';
import Comments from './Comments.js';
import './style.css';
import ComItem from './ComItem'


let t=new Date().getTime();
class Comment extends Component{

	constructor(props){
		super(props);
		this.state={data:null,id:''}
		
	}	

	componentDidMount() {
		let head=new Headers();
		head.append('Content-Type','application/json');

		let setData={
			method:'GET',
			headers:head,
			mode:'cors',
			body:null,
			cache:'default'
		}
		let This=this;

	

		let path=	`https://www.xiaoduyu.com/api/v1/comments?posts_id=${this.props.params.id}&parent_exists=0&per_page=100&gt_create_at=0&_t=${t}`;
		fetch(path,setData)
		.then(function(response){
			return response.json()
		})
		.then(function(data){
			This.setState({data:data.data})
		})

		
	}

	render(){
		let top=null;
		let item=[];
		if(this.state.data!=null){

				this.state.data.forEach(function(value,index){

					item.push(<Comments key={index} val={value} />)
				})

			return(
				<div style={{marginBottom:'.8rem'}}>
					<ComItem id={this.props.params.id}/>
					<div style={{background:'#fff'}}>
						{item}
					</div>
				</div>

					)
			}else{
				return (<p>正在加载............</p>)
			}
	}
}

export default Comment;