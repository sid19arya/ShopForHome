import { useNavigate } from 'react-router-dom';
import './LoginModal.css'
import { loginUser, signupUser } from '../api';
import { useState } from 'react';



function LoginModal(props){

    const [user, setUser] = useState(null);

    const nagivate  = useNavigate();

    const exit_modal = event => {
        nagivate('/',  {
            user: user
        });
    }
    const login = async event => {
        event.preventDefault();
        const username = event.target.parentNode['username'].value;
        const password = event.target.parentNode['password'].value;
        const results = await loginUser(username, password);
        props.setUser(results);
    }
    const signup = async event => {
        event.preventDefault();
        const username = event.target.parentNode['username'].value;
        const password = event.target.parentNode['password'].value;
        const results = await signupUser(username, password)
        alert("Your account has been created, go ahead and signup.")
    }




    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div >Redirect - Sign Up / Sign In</div>
                    <button id="modal-exit" onClick={exit_modal}>X</button>
                </div>
                <form>
                    <input placeholder="username" className="modal-input-user" name='username'/>
                    <input placeholder="password" className="modal-input-password" name='password'/>
                    <button className="login" onClick={login}>Login</button>
                    <button className="signup" onClick={signup}>Signup</button>
                </form>
                
            </div>
        </div>
    );
}

export default LoginModal;