import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Typeahead} from 'react-bootstrap-typeahead';
import {getGitUsers} from '../actions/action';


class UserList extends React.Component {

    constructor(props) {
      super(props);
      this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(e) {
      this.props.getGitUsers(e.target.value);
    }

    render() {
        
        let options = this.props.users || [];
        console.log(options);
        return (
            <div>
            <form>
            <label>
             <input type ="text"
              onChange={(e) => this.handleSelectChange(e)}
              placeholder="Search for a git hub user" 
            />
            </label>
            </form>
            <ul>
              {

                options.map((item, i) => {
                  <li> item </li>
                })
              }
            </ul> 
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.getGitUsers
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({getGitUsers: getGitUsers}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
