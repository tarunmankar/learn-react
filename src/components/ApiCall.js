import { useEffect, useState } from "react";

const ApiCall = () => {
        const [users, setUsers] = useState([]);
        
        useEffect(() => {
            let api = 'https://jsonplaceholder.typicode.com/users';
            const getUsers = async () => {
                try {
                    const response = await fetch(api);
                    const resData = await response.json()
                    setUsers(resData);
                } catch (error) {
                    console.log("my error is "+ error);
                    }
            }
            getUsers()
        }, []);
        
        const listItems = users.map((user)=>{
            return (
                <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                </ul>
                )})

        return (
            <>
                  {listItems}
            </>
        )
}    
export default ApiCall;