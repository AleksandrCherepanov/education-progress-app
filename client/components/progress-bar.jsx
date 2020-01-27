import React, { PureComponent } from 'react';
import { LinearProgress } from '@material-ui/core';
import { lighten, withStyles } from '@material-ui/core/styles'

const BorderProgressBar = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
    },
})(LinearProgress);

class ProgressBar extends PureComponent {
    render() {
        let { progress } = this.props;
        progress = typeof progress === "number" ? progress : 0;
        return (
            <BorderProgressBar variant="determinate" color="secondary" value={progress}/>
        )
    }
}

export default ProgressBar;