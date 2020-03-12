import React, { PureComponent } from 'react';
import UIHeaderApp from '../ui-components/header/ui-header-app';
import ModalWindow from "../ui-components/modal-window/modal-window";

class ProgressList extends PureComponent {
    render() {
        return (            
            <div>
                <UIHeaderApp appName='Education progress' />
                <ModalWindow />
            </div>
        )
    }
}

export default ProgressList;