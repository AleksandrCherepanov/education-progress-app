import React, { PureComponent } from 'react';
import { getUserProgress, getUserRegress, groupUsersByEmail } from '../containers/users';
import RegressBar from './regress-bar';
import ProgressBar from './progress-bar';
import styles from '../styles/user-list.css';

const isFetched = (data) => {
    return Array.isArray(data) && data.length > 0;
};

class UserList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {progress: [], regress: []}
    }

    componentDidMount() {
        this.setState({progress: getUserProgress()});
        this.setState({regress: getUserRegress()});
    }

    render() {
        let listUsers = {};
        let userComponents = [];

        const isReadyForRender = isFetched(this.state.progress) && isFetched(this.state.regress);    

        if (isReadyForRender) {
            listUsers = groupUsersByEmail(this.state);

            Object.keys(listUsers).forEach((user) => {
                userComponents.push(<h3 className='user-name' key={user + 'header'}>{user.replace("@xsolla.com", "")}</h3>);
                userComponents.push(<ProgressBar progress = { listUsers[user].progress } key={user + 'progress'}/>);
                userComponents.push(<RegressBar regressCount = { listUsers[user].regress } key={user + 'regress'}/>);
            });
        }
        
        return isReadyForRender
            ? 
            (
                <div>
                    { userComponents }
                </div>
            ) 
            : "Is loading..."
    }
}

export default UserList;