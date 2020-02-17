import React, {PureComponent} from 'react';
import styles from './burger-menu.scss';

class BurgerMenu extends PureComponent {
    render() {
        return (
            <div className='burger-menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default BurgerMenu;