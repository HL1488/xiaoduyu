import React, { Component } from 'react';


class Item extends Component {
  render() {

    return (
    	<div style={{background:'#fff',padding:'.1rem .3rem',fontSize:13,borderBottom:'1px solid #ddd',wordWrap:'break-word'}}>
	    	<p className="newitem">
		    	<img className="newhead" src={this.props.val.sender_id.avatar_url}/><span style={{fontSize:14}}>{this.props.val.sender_id.nickname}</span>
		    	<span style={{float:'right',width:'60%',textAlign:'right',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>
		    		{this.props.val.comment_id?'9小时前 回复了你的分享'+this.props.val.comment_id.posts_id.title:this.props.val.sender_id.nickname+'关注了你'}
		    	</span>
	    	</p>
	    	{this.props.val.comment_id?this.props.val.comment_id.content_trim:''}
    	</div>
    );
  }
}

export default Item;
