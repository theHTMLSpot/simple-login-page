import { useState } from "react";

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [approvedEmail, setApprovedEmail] = useState(false);
    const [approvedPassword, setApprovedPassword] = useState(false); 

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
    
            // Define your password complexity rules
            const minLength = 8;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
        
            // Check if password meets all the complexity rules
            return (
                password.length >= minLength &&
                hasUppercase &&
                hasLowercase &&
                hasNumber
            );
        
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior
        setApprovedEmail(validateEmail(email));
        setApprovedPassword(validatePassword(password));

        if (approvedEmail && approvedPassword)
        {
            console.log('login succesful')
            event.target.submit();
        }
    }


    return(
        <div id='login-card'>
                <form onSubmit={handleSubmit}>
                <h1> Cavi.Org</h1>

                <input type="email" placeholder="email:" value={email} onChange={(e) => setEmail(e.target.value) } required/>

                <p className="link"> forgot password? </p>
                <input type="password" placeholder="password:" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                <p>Dont have an acount <span className="link">sign-up</span>. Read the  <span className="link"> Terms of service </span></p>

                <button type="submit"> login </button>


            </form>
        </div>
    );
}

export default Login;