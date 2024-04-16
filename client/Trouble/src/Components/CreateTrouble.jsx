import React, {useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'


const CreateTrouble = () => {
    const [trouble,setTrouble]=useState()
    const [err, setErr] = useState()
    const [createdBy, setCreatedBy] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setErr('')
        axios.post("http://localhost:4000/createTrouble", {trouble, created_by: createdBy})
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
            setErr(err.response.data)
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Create Trouble</h2>
            <div>
                <label htmlFor='trouble'>Trouble</label>
                <input type='text' id='trouble' placeholder='Enter a trouble' onChange={(e) => setTrouble(e.target.value)} />
            </div>
            <div>
                <label htmlFor='createdBy'>Created By</label>
                <input type='text' id='createdBy' value={Cookies.get("username")} readOnly />
             </div> 
            <button>Submit</button>
            {err && <p>{err}</p>}
        </form>
    </div>
  )
}

export default CreateTrouble