import { BiMenu } from "react-icons/bi";
import styled from "@emotion/styled";


const Title = styled.h1`
  margin: 0px;
  color: rgba(28, 32, 119, 0.91);
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`
const Menu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
`
//border: "2px solid red"
function Header() {

  function handleMenuClick() {
    console.log("Click!")
  }

  return(
    <header style={{padding: "1rem"}}>
      <Menu >
        <BiMenu onClick={handleMenuClick} style={{marginTop: "6px"}} size="35px"/>
      </Menu>
      <Title>Legal</Title>
    </header>
  )
}

export default Header;