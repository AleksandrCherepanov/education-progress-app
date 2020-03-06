export const registrationModal = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case 'TOGGLE_REGISTRATION_MODAL':
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
};
