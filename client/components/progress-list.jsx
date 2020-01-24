import React, { PureComponent } from 'react';
import UserList from './user-list';
import Container from 'react-bootstrap/Container';


class ProgressList extends PureComponent {
    render() {
        return (
            <Container>
                <h1>Progress List</h1>
                <UserList />
            </Container>
        )
    }
}

export default ProgressList;