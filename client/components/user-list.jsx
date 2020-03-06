import React, {PureComponent} from 'react';
import classNames from 'classnames/bind';

import {getUserCollection} from '../containers/users';
import UIUserCard from '../ui-components/card/ui-user-card';

import styles from '../styles/user-list.scss';

const cx = classNames.bind(styles);

class UserList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {userCollection: []}
    }

    componentDidMount() {
        this.setState({userCollection: getUserCollection()});
    }

    render() {
        const {userCollection} = this.state;

        let userComponents = [];

        userCollection.forEach((user) => {
            const key = user.email;
            userComponents.push(<UIUserCard user={user} key={key}/>);
        });

        return (
            <div className={cx('list-container')}>
                {userComponents}
            </div>
        )
    }
}

export default UserList;
