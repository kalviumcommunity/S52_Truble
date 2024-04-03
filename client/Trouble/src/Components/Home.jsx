import { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Cookies from "js-cookie"
import axios from "axios"

const Home=()=>{
    const jwtToken = Cookies.get('token')
    const navigate = useNavigate()
    useEffect(() => {
        if(jwtToken === undefined){
            navigate("/login")
        }
    }, [jwtToken, navigate])
    const [troubles, setTroubles] = useState([])
    const [displayTroubles, setDisplayTroubles] = useState([])
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/troubles")
        .then((response)=>{
            console.log(response.data)
            setTroubles(response.data)
            setDisplayTroubles(response.data)
            const uniqueUsers = [...new Set(response.data.map(trouble => trouble.created_by))]
            setUsers(uniqueUsers)
        })
        .catch((error)=>console.log(error))
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/deleteTrouble/${id}`)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleLogout = () => {
        Cookies.remove('token')
        navigate("/login")
    }
    const handleUserChange = (event) => {
        const selectedUser = event.target.value;
        if (selectedUser === "All") {
        setDisplayTroubles(troubles); 
        } else {
        const filteredList = troubles.filter(eachTrouble => eachTrouble.created_by === selectedUser);
        setDisplayTroubles(filteredList);
        }
    }
    return(
        <div>
            {console.log(troubles)}
            <h1>Troubles</h1>
            <p>These are the list of ways that will get you into Troubles</p>
            <select onChange={handleUserChange}>
                <option value="All">All Users</option>
                {users.map((user, index) => (
                <option key={index} value={user}>{user}</option>
                ))}
            </select>
            <Link to = "/createTrouble">
                <button>Add +</button>
            </Link>
            <button onClick={handleLogout}>Logout</button>
            <table>
                <thead>
                    <tr>
                        Trouble
                    </tr>
                </thead>
                <tbody>
                    {
                        displayTroubles.map((eachTrouble) => {
                            return(
                                <tr key={eachTrouble._id}>
                                    <td>
                                        {eachTrouble.trouble}
                                    </td>
                                    <td>
                                        <Link to={`/updateTrouble/${eachTrouble._id}`}>
                                            <button>Edit</button>
                                        </Link>
                                        <button onClick={(e) => handleDelete(eachTrouble._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home 
