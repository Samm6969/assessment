/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function getGitUsers(state = [], action ={}) {
    switch (action.type) {
        case 'GET_GIT_USERS':
            return action.payload.users;
            break;
    }
    return state;
}