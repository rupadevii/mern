//01-03-2026
import { useEffect, useState } from 'react'
const URL = "https://dummyjson.com/users"

export default function Suggested() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [input, setInput] = useState("")
    const [editingUser, setEditingUser] = useState(null)
    // const [formType, setFormType] = useState("")

    async function fetchData(){
        try{
            const res = await fetch(URL)
            const data = await res.json()
            setUsers(data.users.map(user => user.firstName))
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchData()
    }, [])


    const filteredNames = users.filter(user => user.toLowerCase().includes(search.toLowerCase()))

    console.log(filteredNames)

    function showAddUser(){
        setEditingUser(null)
        setShowModal(true)
    }
    
    function addUser(e){
        e.preventDefault()
        if(editingUser){
            setUsers(prev => prev.map((item, index) => index===editingUser ? input : item))
        }
        else{
            setUsers(prev => [...prev, input])
        }
        setInput("")
        setShowModal(false)
    }

    function showEditUser(user, index){
        setShowModal(true)
        setInput(user)
        setEditingUser(index)
    }
    
    function deleteUser(idx){
        const newUsers = users.filter((user, index) => index!==idx)
        setUsers(newUsers)
    }

    return (
        <div>
            <form>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </form>
            <button onClick={showAddUser}>+</button>

            {showModal && (
                <div className='overlay'>
                    <div className='modal'>
                        <form>
                            <input type="text" name="user" value={input} onChange={(e) => setInput(e.target.value)}/>
                            <button type="submit" onClick={addUser}>{editingUser? "Edit" : "Add"}</button>
                        </form>
                    </div>
                </div>
            )}
            <ol>
                {filteredNames.map((user, index) => (
                    <li key={index}>
                        <span>{user}</span>
                        <div>
                            <button onClick={() => showEditUser(user, index)}>Edit</button>
                            <button onClick={() => deleteUser(index)}>Delete</button>
                        </div>
                    </li>
                ))} 
            </ol>
        </div>
    )
}
