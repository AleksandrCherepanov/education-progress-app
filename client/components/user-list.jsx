import React, { PureComponent } from 'react';
import { getUserCollection } from '../containers/users';
import UIUserCard from '../ui-components/card/ui-user-card';
import styles from '../styles/user-list.css';

const isFetched = (data) => {
    return Array.isArray(data) && data.length > 0;
};

class UserList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {userCollection: []}
    }

    componentDidMount() {
        this.setState({userCollection: getUserCollection()});
    }

    render() {
        const { userCollection } = this.state;
        let userComponents = [];
        
        userCollection.forEach((user, index) => {
            const key = user.email;
            userComponents.push(<UIUserCard user={user} key={key} />);
        });
        
        return (
            <div className='list-container'>
                { userComponents }
            </div>
        )
    }
}

export default UserList;