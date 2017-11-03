import React, {Component} from 'react';
import Item from './Item.js';


class List extends Component {

  
  constructor(props){
    super(props);
    this.state={
      data:null,
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

     let path=`https://www.xiaoduyu.com/api/v1/topic?child=1&parent_id=${this.props.id}&page=0&per_page=30&_t=1504272518088`;
    fetch(path,setData)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      This.setState({data:data.data})
    })
  }
  render() {

      if(this.state.data!=null){
        let arr=[];
        this.state.data.forEach(function(value,index){
            arr.push(
                  <Item key={index} val={value} />
              )
        })


      return (
        <div>{arr}</div>
      	
      	);
    }else{
      return(<p>正在加载.........</p>)
    }
  }
}

export default List;
