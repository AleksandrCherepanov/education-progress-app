import React, {PureComponent} from 'react';
import classNames from 'classnames/bind';

import {withModalWindow} from '../../redux/modal-window/container-modal-window';
import styles from './registration.scss';

const cx = classNames.bind(styles);

class Registration extends PureComponent {
    render() {
        const {toggleModalWindow} = this.props;

        return (
            <div className={cx('registration')}>
                <a href='#' onClick={toggleModalWindow}>Sign In</a>
                <a href='#' onClick={toggleModalWindow}>Sign Up</a>
            </div>
        )
    }
}

export default withModalWindow(Registration);
