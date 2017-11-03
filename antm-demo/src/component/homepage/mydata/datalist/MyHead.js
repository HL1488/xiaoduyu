import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Top from './Top';
import './myhead.css';

import { ImagePicker } from 'antd-mobile';

const data = [{
  url: localStorage.url,
  id: '2121',
}];

class MyHead extends React.Component {
  state = {
    files: data,
    index:null
  }
  onChange = (files, type, index) => {
    this.setState({
      files,
    });
  }
  render() {
  	var This=this;
    const { files } = this.state;
    return (
    	<div style={{paddingBottom:'1rem'}}>
	      	<Top name="头像"/>
			<div style={{background:'#fff',overflow:'hidden'}}>
				<img ref="image" style={{width:'3rem',height:'3rem',borderRadius:'50%',margin:'.4rem auto',display:'block'}} src={this.state.files[0]==null?localStorage.url:this.state.files[this.state.files.length-1].url}/>
			</div>
	        <ImagePicker
	          files={files}
	          onChange={this.onChange}
	          onImageClick={(index, fs) =>ReactDOM.findDOMNode(this.refs.image).src=This.state.files[index].url}
	          selectable={files.length < 5}
	        />
      </div>
    );
  }
}

export default MyHead;