import './App.css';
import { useState } from "react";
import Axios from 'axios';
/* Just a heads up */

function App() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const addUser = () => {
        Axios.post('http://localhost:3001/create', {
            username: username,
            password: password
        }).then(() => {
            console.log("Success")
        });

    };



    return (
        <div className="App">

            
            <div className="information">
                Register
                <label> Username:</label>
                <input type="text" name="username" id="username" onChange={(e) => { setUsername(e.target.value) }} />
                <label> Password:</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                <button onClick={addUser}>Register</button>
            </div>
        </div>
    );
}

export default App;
