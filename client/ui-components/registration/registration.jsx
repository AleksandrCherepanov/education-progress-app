import React, {PureComponent} from 'react';
import classNames from 'classnames/bind';

import * as GoogleAuth from './../../services/google-auth';

import styles from './registration.scss';

const cx = classNames.bind(styles);

class Registration extends PureComponent {

    componentDidMount() {
        GoogleAuth.init();
    }

    render() {
        return (
            <div className={cx('registration')}>
                {
                    GoogleAuth.isSignIn()
                        ? (<div><a onClick={GoogleAuth.signOut}>Sign Out</a></div>)
                        : (<div id={GoogleAuth.SIGN_IN_BUTTON_ID}><a>Sign In</a></div>)
                }
            </div>
        )
    }
}

export default Registration;
