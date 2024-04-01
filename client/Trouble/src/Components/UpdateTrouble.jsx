import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTrouble = () => {
    const {id} = useParams()
    const [trouble, setTrouble] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:4000/getTrouble/" + id)
        .then(res => {
            console.log(res)
            setTrouble(res.data.trouble)
        })
        .catch(err => console.log(err))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put("http://localhost:4000/updateTrouble/" + id, {trouble})
        .then((res) => {
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h2>Update Trouble</h2>
        <div>
            <label htmlFor='trouble'>Trouble</label>
            <input type='text' id='trouble' placeholder='Enter Trouble' value={trouble} onChange={(e) => setTrouble(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateTrouble;
