import React from 'react';
import UserList from '../containers/user-list';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>GIT Users : </h2>
        <UserList />
    </div>
);

export default App;
