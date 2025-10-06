import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
    })

    return(
        <>
        <h1>Contact From</h1>

        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="firstname" value={formData.firstname} />
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" name="" id="" />
            </div>

    
        </form>
        
        </>

    )
}