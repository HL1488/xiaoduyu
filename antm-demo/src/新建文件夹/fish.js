import React from 'react';
import ReactDOM from 'react-dom';
import { ActionSheet, Button, Toast, Icon } from 'antd-mobile';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

const iconList = [
];

class Test extends React.Component {

 

  render() {
    return (



      <div className="actionSheetContainer">
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showActionSheet}>这是一个好奇心的测试</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showShareActionSheet}>体验挺好的</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showShareActionSheetMulpitleLine}>Lanin评论</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showActionSheet}>为什么界面体验感这么差，首页好乱哦</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showShareActionSheet}>我很好奇</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showShareActionSheetMulpitleLine}>那些花儿</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showActionSheet}>邮箱验证需要密码，然后OAuth并没有存密码</Button>
      </div>
      <div style={{ margin: '0.15rem 0' }}>
        <Button onClick={this.showShareActionSheet}>体验一下</Button>
      </div>
    </div>);
  }
}

export default Test;
