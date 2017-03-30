import React,{Component} from 'react';
import Comment from '../comment/index';
import userTwoStore from '../../stores/userTwoStore';

export default class UserTwo extends Component{

	constructor(props){
		super(props);
		this.state = {
			comments : []
		};
	}

	componentWillMount = ()=>{
			userTwoStore.addListener('userTwoComment',this.getUserTwoComments);
	}

	componentWillUnmount = ()=>{
			userTwoStore.removeListener('userTwoComment',this.getUserTwoComments);
	}

	getUserTwoComments = ()=>{
		this.setState({comments : userTwoStore.getComments()});
	}

	render(){

		let comments = this.state.comments.map((comment,index)=> <Comment key={index} comment={comment} keyValue={index}/>);
		return (

			<div id="userTwo">
				{comments}
			</div>
		);
	}
}