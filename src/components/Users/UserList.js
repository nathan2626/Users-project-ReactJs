import React from "react";

import Card from "../UI/Card";
import classes from './UserList.module.css';

const UserList = props => {
    return (
        <Card cssClass={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} and {user.age}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;