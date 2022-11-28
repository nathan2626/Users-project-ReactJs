import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import AnimatedBackground from "./components/Animations/AnimatedBackground";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: usersList.length }]; //for unique id
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}/>
      <AnimatedBackground />
    </div>
  );
}

export default App;
