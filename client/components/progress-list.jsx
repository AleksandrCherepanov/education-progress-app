import React, { PureComponent } from 'react';
import UserList from './user-list';
import UIHeaderApp from '../ui-components/header/ui-header-app';

class ProgressList extends PureComponent {
    render() {
        return (            
            <div>
                <UIHeaderApp appName='Education progress' />    
                <UserList />
            </div>
        )
    }
}

export default ProgressList;