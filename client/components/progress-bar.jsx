import React, { PureComponent } from 'react';
import { ProgressBar as ReactProgressBar } from 'react-bootstrap';

class ProgressBar extends PureComponent {
    render() {
        let { progress } = this.props;
        progress = typeof progress === "number" ? progress : 0;
        return(
            <ReactProgressBar striped variant="success" now={progress} label={`${progress}%`} />
        )
    }
}

export default ProgressBar;