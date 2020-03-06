import React, {PureComponent} from 'react';
import classNames from 'classnames/bind';

import {withRegistrationModal} from '../../redux/containers/with-registration-modal';
import styles from './registration.scss';

const cx = classNames.bind(styles);

class Registration extends PureComponent {
    render() {
        const {toggleRegistrationModal} = this.props;

        return (
            <div className={cx('registration')}>
                <a href='#' onClick={toggleRegistrationModal}>Sign In</a>
                <a href='#' onClick={toggleRegistrationModal}>Sign Up</a>
            </div>
        )
    }
}

export default withRegistrationModal(Registration);