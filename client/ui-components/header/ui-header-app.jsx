import React, { PureComponent } from "react";
import styles from './ui-header-app.css';
import UIHeaderTag from "./ui-header-tag";

class UIHeaderApp extends PureComponent {
    render() {
        const { appName } = this.props;

        return (
            <div className='header-app'>
                <span>{ appName }</span>
            </div>
        )
    }
}

export default UIHeaderApp;