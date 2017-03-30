import Dispatcher from '../dispatcher/index';
import {EventEmitter} from 'events';

class UserTwoStore extends EventEmitter{
	constructor(){
		super();
		this.comments = [];
	}

	getComments = ()=>{
		return this.comments;
	}

	userTwoStoreListener = (actionObj)=>{

		switch(actionObj.actionType){
			case 'addToUserTwo' : {
							this.comments.push(actionObj.comment);
							this.emit('userTwoComment')
							break;
			}

			case 'addToBothUsers' : {
							this.comments.push(actionObj.comment);
							this.emit('userTwoComment');
							break;
			}
		}
	}	
}

let userTwoStore = new UserTwoStore();
Dispatcher.register(userTwoStore.userTwoStoreListener);

export default userTwoStore;

