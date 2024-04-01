import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Home=()=>{
    const [troubles, setTroubles] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/troubles")
        .then((response)=>{
            console.log(response.data)
            setTroubles(response.data)
        })
        .catch((error)=>console.log(error))
    }, [])
    const handleDelete = (id) => {
        axios.delete("http://localhost:4000/deleteTrouble/" + id)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            {console.log(troubles)}
            <h1>Troubles</h1>
            <p>These are the list of ways that will get you into Troubles</p>
            <Link to = "/createTrouble">
                <button>Add +</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        Trouble
                    </tr>
                </thead>
                <tbody>
                    {
                        troubles.map((eachTrouble) => {
                            return(
                                <tr>
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
