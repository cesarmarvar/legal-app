import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { FlexColumn } from "../../utils"
import { Button } from "../button/button"
import { Input } from "../input/input";

function Login() {

  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData;

  const { login } = useAuth();

  const navigate = useNavigate();

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(formData);
    navigate('/')
  }

  return(
    <div style={{margin: "1rem"}}>
      <form onSubmit={handleSubmit}>
        <FlexColumn style={{gap: "1.5rem"}}>
           <Input 
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleChange}
          />
          <Input 
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="*******"
            value={password}
            onChange={handleChange}
          />
          <Button type="primary" size="wide">Login</Button>
        </FlexColumn>
      </form>
    </div>
  )
}

export default Login;