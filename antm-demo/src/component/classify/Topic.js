import React, {Component} from 'react';
import TopicItem from './TopicItem.js';
import Bar from '../comments/Bar.js';

let t=new Date().getTime();

let sty={
	margin:0,
	textAlign:'center',
	height:'.8rem',
	lineHeight:'.8rem',
	background:'blue',
	color:'#fff'
}

class Topic extends Component {

	constructor(props){
    super(props);
    this.state={
      data:[],
    }
  }


  componentDidMount(){

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

     let path=`https://www.xiaoduyu.com/api/v1/posts?topic_id=${this.props.params.id}&per_page=30&_t=${t}`;
    fetch(path,setData)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      This.setState({data:data.data})
    })
  }
	render() {
	let arr=[];

	if(this.state.data.length>0){

		this.state.data.forEach(function(value,index){
			arr.push(
				<TopicItem key={index} val={value} />
			    )
		})
	
      return (
        <div>
        	<p style={sty}>
	       		{this.state.data[0].topic_id.name}
	        </p>
	        <div style={{paddingBottom:'2rem'}}>
				{arr}
	        </div>
	         <Bar />
        </div>
      	
      	);
   	}else{
   		return(
      <div>
      <p>正在加载........</p>
      <Bar/>
      </div>
      )
   	}
  }
}

export default Topic;
