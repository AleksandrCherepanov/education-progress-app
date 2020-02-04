import React, { PureComponent } from 'react';
import styles from '../styles/regress-bar.css';

class RegressBar extends PureComponent {
    render() {
        let { regressCount } = this.props;
        regressCount = typeof regressCount === "number" ? regressCount : 0;

        return (
            <div className='point-row'>
                <div key={regressCount}>{regressCount}</div>
                <div className="point" />
            </div>
        )
    }
}

export default RegressBar;