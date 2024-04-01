import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreateTrouble = () => {
    const [trouble,setTrouble]=useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/createTrouble", {trouble})
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
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateTrouble