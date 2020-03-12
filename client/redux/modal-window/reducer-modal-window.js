import {TOGGLE_MODAL_WINDOW} from './action-modal-window';

export const modalWindow = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_WINDOW:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
};
