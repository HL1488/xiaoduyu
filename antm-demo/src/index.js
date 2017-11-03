import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import './index.css';
import App from './component/comments/App.js';

import Home from './component/home/Home.js';
import Classify from './component/classify/Classify.js';
import HomePage from './component/homepage/HomePage.js';
import MyData from './component/homepage/mydata/MyData.js';
import Details from './component/homepage/details/Details.js';
import News from './component/news/News.js';
import Register from './component/register/Register.js';
import Login from './component/login/Login.js';
import Comment from './component/home/comment/Comment.js';

import MyHead from './component/homepage/mydata/datalist/MyHead.js';
import Sex from './component/homepage/mydata/datalist/Sex.js';
import Show from './component/homepage/mydata/datalist/Show.js';
import Text from './component/home/Text.js';
import Topic from './component/classify/Topic.js';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/home" component={Home} />
			<Route path="/text" component={Text} />
			<Route path="/classify" component={Classify} />
			<Route path="/homepage" component={HomePage} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Route path="/mydata" component={MyData} />
			<Route path="/news" component={News} />
			<Route path="/details/:key" component={Details} />
			<Route path="/comment/:id" component={Comment} />
			<Route path="/myhead" component={MyHead} />
			<Route path="/sex" component={Sex} />
			<Route path="/show" component={Show} />
			<Route path="/topic/:id" component={Topic} />
		</Route>
	</Router>
, document.getElementById('root'));

