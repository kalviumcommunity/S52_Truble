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
