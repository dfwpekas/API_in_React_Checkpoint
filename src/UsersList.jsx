import { useState, useEffect } from "react";
import axios from "axios";

const UsersList = () => {
    const [listofuser, setListofuser] = useState([])


// fetch data from the server using axios in useEffects hook

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {setListofuser(res.data)}) // saving fetched data into state.
            .catch((error) => {
                console.error("Error Fetching data", error);
            });
    }, []);

return (
        <div className="user-list">
            <h1>List of Users</h1>
            <ul>
                {listofuser.map((user) => (
                    <li key={user.id}> <span style={{color: "lightgreen"}}>Username:</span> {user.name}
                    <hr />
                    Email: {user.email}
                    <hr />
                    </li>
                ))}
            </ul>
        </div>
    )
}
 
export default UsersList;