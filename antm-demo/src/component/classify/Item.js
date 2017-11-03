import React, {Component} from 'react';
import './style.css';
import {browserHistory} from 'react-router';

 let sty={
      width:'.5rem',
      height:'.5rem',
      borderRadius:'50%',
      position:'relative',
      top:'.1rem',
      marginRight:'.1rem'
    }

    let sty2={
      display:'inline-block',
      fontSize:13,
      color:'#ccc',
      width:'50%',
      overflow:'hidden',
      whiteSpace:'nowrap',
      textOverflow:'ellipsis',
      marginLeft:'.1rem',
      position:'relative',
      top:'9px'
    }

    let sty0={
      padding:'0 .1rem',
      background:'#fff',
      margin:'0',
      height:'50px',
      lineHeight:'25px',
      borderBottom: '1px solid #f6f6f6',
    }

class Item extends Component {

  
 
  render() {

        let arr=[];


      return (
        <p style={sty0}>
                <img style={sty} src={this.props.val.avatar}/>
                <span onClick={()=>browserHistory.push('/topic/'+this.props.val._id)}>{this.props.val.name}</span>
                <span style={sty2}>
                {this.props.val.brief}
                </span> 
                <span style={{float:"right",fontSize:14,color:'#333',marginTop:'.2rem'}}>+关注
                </span>
              </p>

      	);
    
  }
}

export default Item;
