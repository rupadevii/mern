import { useState } from "react";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "", email: "", password: ""
    })
    const [status, setStatus] = useState("")

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    async function handleSubmit(e){
        e.preventDefault()

        if(!formData.name || !formData.email || !formData.password){
            return
        }

        try {
            const res = await fetch("http://localhost:8000/auth/signup", 
                {
                    method: "POST", 
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
            const data = await res.json()
    
            console.log(data)

            setStatus("Account created successfully.")
        } catch (error) {
            setStatus("Something went wrong.")
            console.log(error)
        }
    }

    console.log(formData)

    return (
        <div>
            <h1>Sign Up</h1>
            <p>{status}</p>
            <form onSubmit={handleSubmit}>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
                <br/>

                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
                <br/>

                <label for="password">Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
