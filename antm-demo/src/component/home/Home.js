import React,{Component} from 'react';
import Bar from '../comments/Bar.js'
import List from './List.js';
import Header from './Header.js';
import ReactDOM from 'react-dom';


let t=new Date().getTime();


class Home extends Component{

	constructor(props){
		super(props);
		this.state={data:null}
	}

	componentDidMount() {
		
		let head=new Headers();
        head.append('Content-Type','application/json');

        let sendData={
            method:'GET',
            headers:head,
            mode:'cors',
            body:null,
            cache: 'default'
        }
        
        let path='https://www.xiaoduyu.com/api/v1/posts?weaken=1&method=user_custom&per_page=100&_t=1504013312112&comments_sort=create_at:-1&include_comments=1';
        let This=this;

        fetch(path,sendData)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                This.setState({data:data.data});
            });

           
	}

	drop=()=>{
		if(document.body.scrollHeight-document.body.scrollTop<=640){

		};
		
	}

	
	render(){
			let arr=[];
			if(this.state.data!=null){
				this.state.data.forEach(function(value,index){

					arr.push(<List key={index} val={value} />)
				})
				return(
					<div onWheel={this.drop} className="home" style={{paddingBottom:'1rem'}} ref='box'>
						<Header />
						{arr}
						<Bar/>
					</div>
				)

			}else{
				return(<p>正在加载..................</p>)
			}
	}
}

export default Home;