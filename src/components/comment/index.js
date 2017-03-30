import React,{Component} from 'react';

export default class Comment extends Component{

	constructor(props){
		super(props);
	}

	render(){

		let {comment,keyValue} = this.props;

		return (

			<label>
				{keyValue + 1}. Comment : {comment}
			</label>
		);
	}
}