import api from '../interceptors';

export function getGitUsers(request) {
	let url = 'https://api.github.com/search/users'
    let params = {
      username: "Zamm9090",
      access_token: "24d1eade89d50b301a68e4158435860ef42e4744",
      q:  request+"in:login",
      type: "Users"
    }

	return dispatch => {
		return api({
			url : url,
			method: 'GET',
			params:params
		}).then(res => {
			dispatch({
	          	type: "GET_GIT_USERS",
	          	payload: {
	           	 users: res.data.items
	          	}
	        })
		}).catch(errors => {
			dispatch({
	          	type: "GET_GIT_USERS",
	          	payload: {
	            	users: []
	          	}
	        })
		})
	}  
}