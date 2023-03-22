import { useState } from "react";
import Swal from 'sweetalert2';

const Kapcsolat = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function showMessage(e) {
        e.preventDefault();
        if(email.length > 0 && message.length > 0){
            Swal.fire({                
                text: 'Köszönjük!',
                icon: 'success',
                confirmButtonText: 'OK',      
            }).then( () => {
                setEmail("");
                setMessage("");
            });
        }        
    }



    return (
        <div className="container py-5">
            <form action="">
                <div className="w-50 mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" id="email" value={email} onInput={e => setEmail(e.target.value)} required/>
                </div>
                <div className="w-50 mb-3">
                    <label className="form-label" htmlFor="message">Üzenet</label>
                    <textarea className="form-control" rows="3" id="message" value={message} onInput={e => setMessage(e.target.value)} required></textarea>
                </div>
                <button className="elkuld btn btn-primary" onClick={showMessage} type="submit">Elküld</button>
            </form>
        </div>
    );
}
export default Kapcsolat;