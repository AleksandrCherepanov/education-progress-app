import React, {PureComponent} from "react";
import BurgerMenu from "../menu/burger-menu";
import styles from './ui-header-app.scss';

class UIHeaderApp extends PureComponent {
    render() {
        const {appName} = this.props;

        return (
            <div className='header-app'>
                <span>{appName}</span>
                <BurgerMenu />
            </div>
        )
    }
}

export default UIHeaderApp;