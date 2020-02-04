import React, { PureComponent } from "react";
import RegressBar from '../../components/regress-bar';
import ProgressBar from '../../components/progress-bar';
import styles from './ui-user-card.css';

class UIUserCard extends PureComponent {
    render() {
        const { user } = this.props;
        console.log(user);    
        return (
            <div className='card'>
                <span className='card-user-name'>{ user.email.replace("@xsolla.com", "") }</span>
                <ProgressBar progress = { user.progress }/>                    
                <RegressBar className='user-point' regressCount = { user.regress }/>
            </div>
        )
    }
}

export default UIUserCard;