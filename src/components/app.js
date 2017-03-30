import React,{Component} from 'react';
import PostComment from './postComment/index';
import UserOne from './userOne/index';
import UserTwo from './userTwo/index';

export default class App extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return (
			<div id="app">
				<div id="postComment">
					<PostComment />
				</div>
					<UserOne />
					<UserTwo />
			</div>
		);
	}
}