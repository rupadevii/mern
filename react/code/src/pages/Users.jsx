import { useEffect, useState } from 'react'
import { api } from '../utils/api';

export default function Users() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({name: "", age: ""})
    const [status, setStatus] = useState("")
    console.log(users)

    async function getUsers(){
        try {
            setLoading(true)
            const res = await api.get('/users')
            setUsers(res.data.data)
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    function handleChange(e){
        setFormData(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    async function handleSubmit(e){
        e.preventDefault()
        
        if(!formData.name || !formData.age){
            setStatus("Fill all the fields")
            return
        }

        try{
            const res = await api.post('/users', formData)

            console.log(res)

            setFormData({name: "", age: ""})
        }catch(error){
            setStatus(error.msg)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getUsers()
    }, [])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong...</div>}
            {users?.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                </div>
            ))}

            <h2>Add new User</h2>
            <p>{status}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                <br/>

                <input type="number" name="age" value={formData.age} onChange={handleChange}/>
                <button type="submit">Add user</button>
            </form>
        </div>
    )
}
