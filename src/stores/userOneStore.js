import Dispatcher from '../dispatcher/index';
import {EventEmitter} from 'events';

class UserOneStore extends EventEmitter{
	constructor(){
		super();
		this.comments = [];
	}

	getComments = ()=>{
		return this.comments;
	}

	userOneStoreListener = (actionObj)=>{

		switch(actionObj.actionType){
			case 'addToUserOne' : {
							this.comments.push(actionObj.comment);
							this.emit('userOneComment');
							break;
			}

			case 'addToBothUsers' : {
							this.comments.push(actionObj.comment);
							this.emit('userOneComment');
							break;
			}
		}
	}	
}

let userOneStore = new UserOneStore();
Dispatcher.register(userOneStore.userOneStoreListener);

export default userOneStore;


