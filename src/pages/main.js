import styled from "@emotion/styled";
import {colors} from '../styles/colors';
import { Input } from '../components/input/input'
import { FlexColumn } from "../utils";
import { Button } from '../components/button/button';
import { MdFamilyRestroom, MdHouse } from 'react-icons/md';
import { BsBriefcaseFill } from 'react-icons/bs';


function MainPage() {


  return(
    <FlexColumn style={{alignItems: "center"}}>
      <h3 style={{color: `${colors.blue.regular}`, marginTop: "30px", marginBottom: "30px"}}>Encuentra a tu representante</h3>
      <form>
        <FlexColumn style={{gap: "20px"}}>
          <Input placeholder="Legal issue or Lawyer name" type="query"/>
          <Input placeholder="Location" type="query"/>
          <Button size="tall" type="primary">get started</Button>
        </FlexColumn>
      </form><br />

    </FlexColumn>
  )
}

export default MainPage;