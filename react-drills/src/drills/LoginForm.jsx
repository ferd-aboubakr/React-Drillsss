import { useState } from "react"

function LoginForm(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <form>
            <input type ="email"/>
            <input type ="pasword"/>
            <button type = "submit">Submit</button>
        </form>
    )
}

export default LoginForm