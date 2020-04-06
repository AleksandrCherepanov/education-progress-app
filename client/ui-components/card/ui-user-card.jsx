import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';

import RegressBar from '../../components/regress-bar';
import ProgressBar from '../../components/progress-bar';

import styles from './ui-user-card.scss';
const cx = classNames.bind(styles);

class UIUserCard extends PureComponent {
    render() {
        const { user } = this.props;
        return (
            <div className={cx('card')}>
                <span className={cx('card-user-name')}>{ user.email.replace("@xsolla.com", "") }</span>
                <ProgressBar progress = { user.progress }/>                    
                <RegressBar className={cx('user-point')} regressCount = { user.regress }/>
            </div>
        )
    }
}

export default UIUserCard;