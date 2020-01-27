import React, { PureComponent } from 'react';
import UserList from './user-list';
import { Container, AppBar, Typography } from '@material-ui/core';


class ProgressList extends PureComponent {
    render() {
        return (            
            <Container>     
                <AppBar position="static">
                <Typography variant="h6">Education progress</Typography>
                </AppBar>   
                <UserList />
            </Container>
        )
    }
}

export default ProgressList;