import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'antd-mobile';
import Bar from '../top/Bar.js'
const Item = List.Item;
const Brief = Item.Brief;
var da={
float: 'right' ,
}
var div={
  height:'10px',
  width:'100%',
}
var c={
  color:'#a19d9d',
  fontSize:'14px'
}
class Three extends React.Component {
  state = {
    disabled: false,
  }
  handleLongPress = (e) => {
    
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.text).innerHTML=this.props.val.content_html;
  }

  render() {

    return (
      <div>     
      
        <Item onLongPress={this.handleLongPress}>
        <img src={this.props.val.user_id.avatar_url}/>
        <span>{ this.props.val.user_id.nickname}</span><br/>
        <p style={c}>{this.props.val.topic_id.name}·{this.props.val.view_count}次浏览·6天前</p>
        <h4>{this.props.val.title}</h4>
        <p ref="text" style={c}></p>
        </Item>
        <div style={div}></div>
        <Bar />
    </div>);
  }
}
export default Three;