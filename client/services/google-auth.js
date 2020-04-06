export const config = {
    client_id: '503467652048-fs9ltvci17pk1ov9k093slrjb16akjej.apps.googleusercontent.com',
    cookiepolicy: 'single_host_origin',
    ux_mode: 'redirect',
    redirect_uri: 'https://localhost:5000'
};

let auth2 = null;

const successSignIn = (googleUser) => {
    document.getElementById('name').innerText = "Signed in: " + googleUser.getBasicProfile().getName();
    console.log(googleUser);
};

const errorSignIn = (error) => {
    console.log(JSON.stringify(error, undefined, 2));
};

const attachSignIn = (element, auth2) => {
    auth2.attachClickHandler(element, {}, successSignIn, errorSignIn);
};

const load = () => {
    auth2 = gapi.auth2.init(config);
    attachSignIn(document.getElementById('sign-in-button'), auth2);
};

export const getAuth = () => {
    return auth2 === null ? null : auth2.getAuthInstance();
};

export const isSignIn = () => {
    return getAuth().isSignedIn.get();
};

export const GoogleAuth = () => {
    gapi.load('auth2', load);
};
