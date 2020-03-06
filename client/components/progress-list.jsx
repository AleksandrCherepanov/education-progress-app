import React, { PureComponent } from 'react';
import UIHeaderApp from '../ui-components/header/ui-header-app';

class ProgressList extends PureComponent {
    render() {
        return (            
            <div>
                <UIHeaderApp appName='Education progress' />
            </div>
        )
    }
}

export default ProgressList;