import React,{Component} from 'react';
import actions from '../../actions/index';

export default class PostComment extends Component{

	constructor(props){
		super(props);
	}

	postComment = (event)=>{
		event.preventDefault();
		let elements = event.target.elements;

		if(elements.user.value === 'user1'){
				actions.addToUserOne(elements.comment.value);
		}
		else if(elements.user.value === 'user2'){
				actions.addToUserTwo(elements.comment.value);
		}
		else{
				actions.addToBothUsers(elements.comment.value);
		}
	}

	render(){

		return (
			<div id="postComment">
				<form onSubmit={this.postComment}>
					<div>Comment : <input type="text" size="15" name="comment" required/></div>
					<div><input type="radio" name="user" value="user1"/> User One</div>
					<div><input type="radio" name="user" value="user2" /> User Two</div>
					<div><input type="radio" name="user" value="user3" defaultChecked/> User Three</div>
					<div><input type="submit" name="submitbtn" value="PostComment" /></div>
				</form>
			</div>
		);
	}
}