import React, { PureComponent } from 'react';
import styles from '../styles/regress-bar.css';

class RegressBar extends PureComponent {
    render() {
        let { regressCount } = this.props;
        regressCount = typeof regressCount === "number" ? regressCount : 0;
        const limit = regressCount > 8 ? 8 : regressCount;

        // let points = [];
        // for (let index = 0; index < limit; index++) {
        //     points.push(<div className="point" key={index.toString()}></div>);         
        // }
        // if (limit !== regressCount) {
        //     points.push(<div key={limit}>and {regressCount - limit} more</div>)
        // }       

        return (
            <div className='point-row'>
                <div key={regressCount}>{regressCount}</div>
                <div className="point"></div>
            </div>
        )
    }
}

export default RegressBar;