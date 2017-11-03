import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
var da={
float: 'right' , 
}
var div={
  height:'1px',
  width:'100%',
}
var acc={
  width:'100%',
  height:'30px', 
}
var c={
  color:'#a19d9d',
  fontSize:'14px'
}
class Kaifa extends React.Component {
  state = {
    disabled: false,
  }
  handleLongPress = (e) => {
    console.log('longpress toggled', e);
  }
  render() {
    return (<div>     
      <Item onLongPress={this.handleLongPress}>
      <h2>.心情 </h2><span>无事件</span>
      <a href="">·开发动态·</a> 
      <a href="" style={c}>29次浏览·1个赞·1人关注·6天前</a>
</Item>
      <div style={div}></div>
        <Item onLongPress={this.handleLongPress}>
        <p>探索宇宙真理我很累</p>
        </Item>
        <div style={acc}>
        <a href="">微信 <a href="">微博 </a> <a href="">Twitter</a></a> 
        <a href="" style={da}>赞 <a href="">关注 </a><a href="">评论 </a></a>
        </div><br/><br/>

        <Item onLongPress={this.handleLongPress}>
      <h2>.心情</h2><span>无事件</span>
      <a href="">·开发动态·</a> 
      <a href="" style={c}>29次浏览·1个赞·1人关注·6天前</a>
</Item>
      <div style={div}></div>
        <Item onLongPress={this.handleLongPress}>
        <p>探索宇宙真理我很累</p>
        </Item>
        <div>
        <a href="">微信 <a href="">微博 </a> <a href="">Twitter</a></a> 
        <a href="" style={da}>赞 <a href="">关注 </a><a href="">评论 </a></a>
        </div><br/><br/>
    </div>);
  }
}
export default Kaifa;