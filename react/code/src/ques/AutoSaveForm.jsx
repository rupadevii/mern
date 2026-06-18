import { useEffect, useState } from 'react';

function AutoSaveForm() {
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("autosave"))||{
        name: '',
        email: "",
        message: ""
    })

    function handleChange(e) {
        setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    useEffect(() => {
        localStorage.setItem("autosave", JSON.stringify(formData))
    })

    function clearData() {
        localStorage.removeItem("autosave")
        setFormData({name: "", email: "", message: ""})
    }

    return (
        <div>
            <h1>Auto Save Form</h1>

            <form className="form">
                <label>Name: </label>
                <input type="text" name="name" data-testid="form-input" value={formData.name} onChange={handleChange}/>
                <br />
                <br />
                <label>Email: </label>
                <input type="email" name="email" data-testid="form-email" value={formData.email} onChange={handleChange}/>
                <br />
                <br />
                <label>Message: </label>
                <textarea data-testid="form-message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </form>
            <button data-testid="clear-btn" onClick={clearData}>Clear</button>
        </div>
    );
}

export default AutoSaveForm;
