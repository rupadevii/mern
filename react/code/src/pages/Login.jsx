import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const navigate = useNavigate()
    const [status, setStatus] = useState("")

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    async function handleSubmit(e){
        e.preventDefault()

        if(!formData.email || !formData.password){
            return
        }

        try{
            const res = await fetch("http://localhost:8000/auth/login", 
                {
                    method: "POST", 
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
            const data = await res.json()

            console.log(data)

            setStatus("Logged in successfully")

            setTimeout(() => {
                navigate('/home')
            }, 1000)
        }
        catch(error){
            console.log(error)
            setStatus("Something went wrong.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <p>{status}</p>
            <form onSubmit={handleSubmit}>

                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
                <br/>

                <label for="password">Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}
