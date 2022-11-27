import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
            console.log('Empty value');

            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non empty values).'
            });

            return;

        } else  if(+enteredAge < 1) {
            console.log('Age cannot be less than 0');
            
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (cannot be less than 0).'
            });

            return;
        }

        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        
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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal headerTitle={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />

                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;