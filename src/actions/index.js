import Dispatcher from '../dispatcher/index';

export default {
	addToUserOne : (comment)=>{
		Dispatcher.dispatch({
			actionType : 'addToUserOne',
			comment
		});
	},
	addToUserTwo : (comment)=>{
		Dispatcher.dispatch({
			actionType : 'addToUserTwo',
			comment
		});
	},
	addToBothUsers : (comment)=>{
		Dispatcher.dispatch({
			actionType : 'addToBothUsers',
			comment
		});
	}
};