import React,{Component} from 'react';
import Comment from '../comment/index';
import userOneStore from '../../stores/userOneStore';

export default class UserOne extends Component{

	constructor(props){
		super(props);
		this.state = {
			comments : []
		};
	}

	componentWillMount = ()=>{
			userOneStore.addListener('userOneComment',this.getUserOneComments);
	}

	componentWillUnmount = ()=>{
			userOneStore.removeListener('userOneComment',this.getUserOneComments);
	}

	getUserOneComments = ()=>{
		this.setState({comments : userOneStore.getComments()});
	}

	render(){

		let comments = this.state.comments.map((comment,index)=> <Comment key={index} comment={comment} keyValue={index}/>);

		return (

			<div id="userOne">
				{comments}
			</div>
		);
	}
}