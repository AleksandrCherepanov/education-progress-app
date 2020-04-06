import React, {PureComponent} from 'react';
import classNames from 'classnames/bind';

import styles from './registration.scss';
import {GoogleAuth, isSignIn} from './../../services/google-auth';

const cx = classNames.bind(styles);

class Registration extends PureComponent {

    componentDidMount() {
        GoogleAuth();
    }

    render() {
        return (
            <div className={cx('registration')}>
                <div id="sign-in-button"><a>{isSignIn ? 'Sign In' : 'Sign Out'}</a></div>
            </div>
        )
    }
}

export default Registration;
