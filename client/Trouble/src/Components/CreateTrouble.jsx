import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreateTrouble = () => {
    const [trouble,setTrouble]=useState()
    const [createdBy, setCreatedBy] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        axios.post("http://localhost:4000/createTrouble", {trouble, created_by: createdBy})
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => console.log(err))
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
                <label>Created By</label>
                <input type='text' id='trouble' placeholder='Enter username' onChange={(e) => setCreatedBy(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default CreateTrouble