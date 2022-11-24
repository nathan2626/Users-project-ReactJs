import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);

        //for reset a input value
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangedHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card cssClass={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />

                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
        
    );
};

export default AddUser;