import {connect} from 'react-redux';
import {toggleRegistrationModal} from '../actions/registration-modal';

const mapStateToProps = (state) => (
    {
        isRegistrationModal: state.registrationModal.isOpen
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        toggleRegistrationModal: () => {
            dispatch(toggleRegistrationModal());
        }
    }
);

export const withRegistrationModal = connect(mapStateToProps, mapDispatchToProps);