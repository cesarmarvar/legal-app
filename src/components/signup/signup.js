import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { FlexColumn } from "../../utils";
import { Button } from "../button/button";
import { Input } from "../input/input";

function Signup() {

  const [ formData, setFormData ] = useState({
    username: "",
    email: "",
    password: ""
  })

  const { username, email, password } = formData;

  const { signup } = useAuth();

  const navigate = useNavigate();

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    signup(formData);
    navigate('/')
  }

  return(
    <div style={{margin: "1rem"}}>
      <form onSubmit={handleSubmit}>
        <FlexColumn style={{gap: "1.5rem"}}>
          <Input 
            id="username"
            name="username"
            label="Username"
            type="username"
            placeholder="Blitzord"
            value={username}
            onChange={handleChange}
          />
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
          <Button type="primary" size="wide">Sign in</Button>
        </FlexColumn>
      </form>
    </div>
  )
}

export default Signup;