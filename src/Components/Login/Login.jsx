import {useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../../firebase'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const signin = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch((e) => alert(e.message))
    }
    
    const signup = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch((e) => alert(e.message))
    }
  return (
    <div className="login">
        <Link to='/'>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" className="login__logo" />
        </Link>

        <div className="loginForm__container">
            <h1>Sign in</h1>
            <form>
                <h4>Email</h4>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <button onClick={signin}>Sign in</button>
                <p>By continuing, you agree to Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.</p>
            </form>
        </div>
        <span>New to Amazon?</span>
        <button onClick={signup} className="createAccountBtn">Create your Amazon Account</button>
    </div>
  )
}

export default Login