import {connect} from 'react-redux';
import {toggleModalWindow} from './action-modal-window';

const mapStateToProps = (state) => (
    {
        isModalWindowOpen: state.modalWindow.isOpen
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        toggleModalWindow: () => {
            dispatch(toggleModalWindow());
        }
    }
);

export const withModalWindow = connect(mapStateToProps, mapDispatchToProps);
