import React, {Component} from 'react';

class List extends Component {

  render() {


  	var all=[
  		{name:'小度鱼',content:'ckhsakjkjkjasjasljlas'},
  		{name:'中度鱼',content:'ckhsakjkjkjasjasljlas'},
  		{name:'大度鱼',content:'ckhsakjkjkjasjasljlas'},
  		{name:'老度鱼',content:'ckhsakjkjkjasjasljlas'}
  	]
  	var arr=[];
  	all.forEach(function(value,index){
  		arr.push(<p className="item" key={index}><span className="head"></span>{value.name}<span style={{fontSize:14,color:'#ccc'}}>{value.content}</span> <span style={{float:"right",fontSize:14,color:'#333'}}>+关注</span></p>)
  	})
    return (
    	<div>
			{arr}
    	</div>
    	);
  }
}

export default List;
