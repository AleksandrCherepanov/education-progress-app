import React, {PureComponent} from 'react';
import UIHeaderApp from '../ui-components/header/ui-header-app';
import * as Cookie from '../services/cookie'
import * as GoogleAuth from '../services/google-auth'

class ProgressList extends PureComponent {
    constructor(props) {
        super(props);
        const cookieUserValue = Cookie.getCookie(Cookie.COOKIE_GOOGLE_USER.name);
        const userId = GoogleAuth.getUserIdFromUrl();

        if (cookieUserValue.length < 1 && /^\d+$/.test(userId)) {
            Cookie.setCookie(Cookie.COOKIE_GOOGLE_USER.name, userId, Cookie.COOKIE_GOOGLE_USER.maxAge);
        }
    }

    render() {
        return (
            <div>
                <UIHeaderApp appName='Education progress'/>
            </div>
        )
    }
}

export default ProgressList;