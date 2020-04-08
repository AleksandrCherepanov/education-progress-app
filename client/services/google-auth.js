import * as Cookie from './../services/cookie';
import * as Auth from './../config/auth';
import * as App from "../config/app";

export const SIGN_IN_BUTTON_ID = 'sign-in-button';
const AUTH_TOKEN_QUERY_PARAM = 'id_token';

let auth2 = null;

const successSignIn = (googleUser) => {
};

const errorSignIn = (error) => {
    console.log(JSON.stringify(error, undefined, 2));
};

const attachSignIn = (element, auth2) => {
    auth2.attachClickHandler(element, {}, successSignIn, errorSignIn);
};

const load = () => {
    auth2 = gapi.auth2.init(Auth.google);
    if (!!document.getElementById(SIGN_IN_BUTTON_ID)) {
        attachSignIn(document.getElementById(SIGN_IN_BUTTON_ID), auth2);
    }
};

export const isSignIn = () => {
    const cookieUserValue = Cookie.getCookie(Cookie.COOKIE_GOOGLE_USER.name);
    return cookieUserValue > 0 && /^\d+$/.test(cookieUserValue);
};

export const init = () => {
    gapi.load('auth2', load);
};

export const getUserIdFromUrl = () => {
    const hash = new URL(window.location.href).hash;
    const queryParams = hash.split('&');
    const token = queryParams.filter((el) => {
        return el.indexOf(AUTH_TOKEN_QUERY_PARAM) >= 0;
    });

    let tokenValue = '';
    if (token.length > 0) {
        tokenValue = JSON.parse(atob(token[0].split('=')[1].split('.')[1]));
    }

    return tokenValue ? tokenValue.sub : '';
};

export const signOut = () => {
    Cookie.deleteCookie(Cookie.COOKIE_GOOGLE_USER.name);
    window.location.href = App.config.host;
};