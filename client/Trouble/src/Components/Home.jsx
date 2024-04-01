import { useEffect, useState } from 'react'
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
            <ul>
                {
                    troubles && troubles.map((eachTrouble)=>{
                        return(
                            <li key={eachTrouble.id}>
                                <p>{eachTrouble.trouble}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Home 
