import {combineReducers} from 'redux';
import getGitUsers from './reducer-users';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
    getGitUsers
});

