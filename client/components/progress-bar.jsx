import React, {PureComponent} from 'react';
import styles from '../ui-components/progress/progress-circle.scss';

class ProgressBar extends PureComponent {
    render() {
        let {progress} = this.props;
        progress = typeof progress === "number" ? progress : 0;
        return (
            <div className={`c100 p${progress} big green`}>
                <span>{progress + '%'}</span>
                <div className="slice">
                    <div className="bar"/>
                    <div className="fill"/>
                </div>
            </div>
        )
    }
}

export default ProgressBar;