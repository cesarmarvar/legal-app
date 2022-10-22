import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import { colors } from "./styles/colors";

const Container = styled.div`
  max-width: 25rem;
  max-height: 35rem;
  padding: 2rem;
  border-radius: 40px;
  background-color: #FFFFFF;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

`

function UnauthenticatedApp() {

  const [ auth, setAuth ] = useState(true);

  const navigate = useNavigate();

  return(
    <>
    <Container>
      <h1 style={{color: `${colors.blue.regular}`}}>Welcome</h1>
      <p>signup or login to access</p>
      { auth ? <Login /> : <Signup />}
      <a
        href="###" 
        style={{
          cursor: "pointer",
          margin: "0 auto",
          paddingTop: "0.5rem",
          textDecoration: "none",
          fontWeight: "600",
          color: `${colors.blue.regular}`
        }}
        onClick={() => {
          navigate('/signup')
          setAuth(!auth)
        }}
      >{ auth ? "Sign up" : "Login" }</a>
    </Container>
    </>    
  )
}

export default UnauthenticatedApp;