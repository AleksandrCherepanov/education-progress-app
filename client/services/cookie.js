export const COOKIE_GOOGLE_USER = {
    name: 'education-progress-user',
    maxAge: 10
};

export const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    const cookieUser = cookies.filter((el) => {
        return el.indexOf(name) >= 0;
    });

    let cookieValue = '';
    if (cookieUser.length > 0) {
        cookieValue = cookieUser[0].split('=')[1];
    }

    return cookieValue;
};

export const setCookie = (name, value, maxAgeInDays) => {
    document.cookie = `${name}=${value};max-age=${60 * 60 * 24 * maxAgeInDays}`;
};

export const deleteCookie = (name) => {
    let date = new Date();
    date.setSeconds(date.getSeconds() - 10);

    document.cookie = `${name}=;expires=${date.toUTCString()}`;
};
