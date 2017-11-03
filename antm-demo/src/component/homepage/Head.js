import React,{Component} from 'react';
import {browserHistory} from 'react-router';
import './style.css';
import {AJAX} from '../comments/AJAX.js';



let sty={
      background:'#fff', 
      overflow:'hidden',
      padding:'.2rem',
      textAlign:'center'   
    }

class Head extends Component{

  constructor(){
    super();
    this.state={data:null,id:null}
  }

  componentDidMount() {
    let bolem=isNaN(this.props.id);
    let This=this;
    AJAX(
        'get',
        `https://www.xiaoduyu.com/api/v1/people/${bolem&&this.props.id!=null?this.props.id:'5996ab0765c0566225564b7e'}`,
        `_t=1504515044480`,
        function(response){
          let data=JSON.parse(response)
          This.setState({data:data.data})

        })
      
  }

  componentWillReceiveProps=(props)=> {

        if (props) {
      
          this.componentDidMount();
        

        }
    }

	
  render() {

  	
  	if(this.state.data){
      return (
      	<div>
  			<div style={sty}>
  				<img src={this.state.data.avatar_url} className="myhead"/>
  				<p style={{textAlign:'center',margin:'.1rem 0'}}>{this.state.data.nickname}</p>
         <span style={{fontSize:12,color:'#333'}}>{this.state.data.brief}</span>
  			</div>
      	</div>);
      }else{
        return(<p>正在加载..........</p>)
      }
	}
}

export default Head;