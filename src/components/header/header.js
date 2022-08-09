import { BiMenu } from "react-icons/bi";
import styled from "@emotion/styled";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 52.5%; // =============================== temp fix to display title on middle
`
const Title = styled.h1`
  margin: 0px;
  color: rgba(28, 32, 119, 0.91);
  font-size: 32px;
  font-weight: 600;
`
const Menu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
//border: "2px solid red"
function Header() {

  function handleMenuClick() {
    console.log("Click!")
  }

  return(
    <FlexRow style={{margin: "1rem"}}>
      <Menu >
        <BiMenu onClick={handleMenuClick} style={{marginTop: "6px"}} size="35px"/>
      </Menu>
      <Title>Legal</Title>
    </FlexRow>
  )
}

export default Header;