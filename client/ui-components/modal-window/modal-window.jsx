import React, {PureComponent} from 'react';
import classNames from 'classnames/bind';

import {withModalWindow} from '../../redux/modal-window/container-modal-window';

import styles from './modal-window.scss';

const cx = classNames.bind(styles);

class ModalWindow extends PureComponent {
    render() {
        const {isModalWindowOpen, toggleModalWindow} = this.props;

        return isModalWindowOpen && (
            <div className={cx('modal-window')}>
                <div className={cx('modal-window-overlay')}/>
                <div className={cx('modal-window-content')}>
                    <div className={cx('modal-window-close')} onClick={toggleModalWindow}>X</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withModalWindow(ModalWindow);
