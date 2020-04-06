import React, {PureComponent} from 'react';
import classNames from 'classnames/bind';
import Registration from '../registration/registration';

import styles from './ui-header-app.scss';

const cx = classNames.bind(styles);

class UIHeaderApp extends PureComponent {
    render() {
        const {appName} = this.props;

        return (
            <div className={cx('header-app')}>
                <span>{appName}</span>
                <Registration />
            </div>
        )
    }
}

export default UIHeaderApp;