import { useState } from "react";
import { DivisionLine, FlexColumn, MainContainer } from "../../../utils";
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";

function SignupPage() {

  const [ formData, setFormData ] = useState({
    username: "",
    email: "",
    password: ""
  })
  const { username, email, password } = formData;

  const navigate = useNavigate();

  const { signup } = useAuth();

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    signup(formData);
    navigate('/');
  }

  return (
    <MainContainer>
      <h1>Create an account</h1>
      <DivisionLine />
      <br />
      <form>
        <FlexColumn style={{
          gap: "1.5rem"
        }}>
          <Input 
            id="username"
            name="username"
            label="Username:"
            placeholder="John Doe"
            value={username}
            onChange={handleChange}
          />
          <Input 
            id="email"
            name="email"
            label="Email:*"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleChange}
          />
          <Input 
            id="password"
            name="password"
            label="Password:*"
            type="password"
            placeholder="*******"
            value={password}
            onChange={handleChange}
          />
          <Button 
            style={{
              margin: "0 auto",
              marginTop: "1rem"
            }}
            type="primary" 
            size="wide"
            onClick={handleSubmit}
          >Submit</Button>
          <a
            href="###" 
            style={{
              cursor: "pointer",
              margin: "0 auto",
              textDecoration: "underline"
            }}
            onClick={() => navigate('/login')}
          >Already registered? Log in</a>
        </FlexColumn>
      </form>
    </MainContainer>
  )
}

export default SignupPage;