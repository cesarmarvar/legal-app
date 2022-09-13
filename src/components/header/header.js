import { BiMenu } from "react-icons/bi";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { FlexRow } from "../../utils";


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

  const navigate = useNavigate();

  return(
    <header style={{padding: "1rem"}}>
      <Menu >
        <BiMenu onClick={handleMenuClick} style={{marginTop: "6px"}} size="35px"/>
      </Menu>
      <FlexRow style={{justifyContent: "center"}}>
        <Title
        onClick={() => navigate(`/`)}
        style={{cursor: "pointer"}}>Legal</Title>
      </FlexRow>
    </header>
  )
}

export default Header;