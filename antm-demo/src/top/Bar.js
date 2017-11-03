import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { TabBar, Icon } from 'antd-mobile';
import './Bar.css';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="小度鱼"
          key="小度鱼"
          icon={<div
          />
          }
          selectedIcon={<div
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            browserHistory.push('/home')
          }}
          data-seed="logId"
        >
        </TabBar.Item>
        <TabBar.Item
          title="话题"
          key="话题"
          icon={<div
          />
          }
          selectedIcon={<div
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            browserHistory.push('/classify')
          }}
          data-seed="logId"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div 
            />
          }
          selectedIcon={
            <div
             
            />
          }
          title="消息"
          key="消息"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            browserHistory.push('/news')
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<div/>}
          selectedIcon={<div/>}
          title="意外"
          key="意外"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            browserHistory.push('/homepage')
          }}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}


export default Bar;
