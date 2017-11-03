import React,{Component} from 'react';
import Top from './Top';
import { PickerView } from 'antd-mobile';

const seasons = [
  [
    {
      label: '性别',
      value:'性别'
    }
  ],
  [
    {
      label: '男',
      value: '男',
    },
    {
      label: '女',
      value: '女',
    },
  ],
];
class Sex extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  };
  render() {
    return (
    	<div>
    		<Top name="性别"/>
			<PickerView
		        onChange={this.onChange}
		        value={this.state.value}
		        data={seasons}
		        cascade={false}
		      />
    	</div>
      
    );
  }
}

export default Sex;