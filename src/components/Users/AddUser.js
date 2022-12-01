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
            <h1>🚀 Add User App with modal ! 🧑🏻‍💻</h1>
            {error && <ErrorModal headerTitle={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form className={classes.fixZindex} onSubmit={addUserHandler}>
                    <div className={classes.mahi_holder}>
                        <div className={classes.container}>
                            <div className={ `${classes.row} ${classes.bg_1}` }>
                                <div className={classes.col_3}>
                                    <input className={classes.effect_1} id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} placeholder="Your username" />
                                    <span className={classes.focus_border}></span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={classes.mahi_holder}>
                        <div className={classes.container}>
                            <div className={ `${classes.row} ${classes.bg_1}` }>
                                <div className={classes.col_3}>
                                    <input className={classes.effect_1} id="age" type="number" value={enteredAge} onChange={ageChangedHandler} placeholder="Your age" />
                                    <span className={classes.focus_border}></span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    {/* <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler} />

                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler} /> */}

                    <Button type="submit">Add User</Button>
                </form>
            </Card>

            

            <div className={classes.linktr}>
                <a href="https://www.linkedin.com/in/nathan-journo/" target="_blank" className={`${classes.linktr__goal} ${classes.r__link}`}>Suivez-moi sur LinkedIn 💪💪💪</a>
            </div>

        </div>
        
    );
};

export default AddUser;