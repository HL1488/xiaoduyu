import React,{Component} from 'react';
import Three from './three.js';

class Content extends Component{

	constructor(props){
		super(props);
		this.state={text:null}
	}

	componentDidMount() {
		
		let head=new Headers();
		head.append('Content-Type','appliction/json');

		let setSend={
			method:"GET",
			header:head,
			mode:'cors',
			body:null
		}
		let This=this;

		fetch(`https://www.xiaoduyu.com/api/v1/posts?topic_id=${this.props.params.name}&per_page=30&_t=1504489971772`,setSend)

			.then(function(response){
					return response.json();
			})
			.then(function(data){
				This.setState({text:data.data})
			})

	}

	render(){
		if(this.state.text!=null){

			let arr=[];
			this.state.text.forEach(function(value,index){
                       console.log(value)
					arr.push(<Three key={index} val={value} />)
			})
			return(
			<div>
				{arr}
			</div>
			)
		}else{
			return(<p>正在加载............</p>)
		}

		
	}
}

export default Content;