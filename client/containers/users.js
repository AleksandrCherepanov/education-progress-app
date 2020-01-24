export const getUserProgress = () => {
    return [
        {
            email: 'a.cherepanov',
            progress: 3
        },
        {
            email: 'a.treschilov',
            progress: 20
        }
    ]
};

export const getUserRegress = () => {
    return [
        {
            email: 'a.cherepanov',
            regress: 3
        },
        {
            email: 'a.treschilov',
            regress: 1
        }
    ] 
};

export const groupUsersByEmail = (state) => {
    let usersList = {};
    const {regress, progress} = state;

    progress.forEach(element => {
        usersList[element.email] = { ...usersList[element.email], progress: element.progress };
    });

    regress.forEach(element => {
        usersList[element.email] = { ...usersList[element.email], regress: element.regress };
    });

    return usersList;
};