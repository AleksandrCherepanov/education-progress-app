import React, { PureComponent } from 'react';
import { getUserProgress, getUserRegress, groupUsersByEmail } from '../containers/users';
import RegressBar from './regress-bar';
import ProgressBar from './progress-bar';
import { Card, CardHeader, CardContent, Typography, CardActions } from '@material-ui/core';
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
                userComponents.push(
                    <Card className='user-card'>                    
                        <CardHeader title={
                            <Typography variant="h5" component="h2">
                                { user.replace("@xsolla.com", "") }
                            </Typography>                                
                        } />
                        <CardContent>
                            <Typography variant="h6">
                                { listUsers[user].progress + '%' }
                            </Typography>
                            <ProgressBar progress = { listUsers[user].progress } key={user + 'progress'}/>                    
                        </CardContent>
                        <CardActions>
                            <RegressBar className='user-point' regressCount = { listUsers[user].regress } key={user + 'regress'}/>
                        </CardActions>
                    </Card>    
                );
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