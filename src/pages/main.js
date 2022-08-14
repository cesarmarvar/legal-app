import styled from "@emotion/styled";
import {colors} from '../styles/colors';
import { Input } from '../components/input/input'
import { FlexColumn } from "../utils";
import { Button } from '../components/button/button';
import { PracticeCard } from "../components/practice-card/practice-card";
import { MdFamilyRestroom, MdHouse } from 'react-icons/md';
import { BsBriefcaseFill } from 'react-icons/bs';
import { Disclaimer } from "../components/disclaimer/disclaimer";
import { AskALawyer } from "../components/ask-lawyer/ask-a-lawyer";


function MainPage() {


  return(
    <FlexColumn style={{alignItems: "center"}}>
      <h3 style={{color: `${colors.blue.regular}`, marginTop: "30px", marginBottom: "30px"}}>Encuentra a tu representante</h3>
      <form>
        <FlexColumn style={{gap: "20px"}}>
          <Input 
            placeholder="Legal issue or Lawyer name" 
            type="query"
          />
          <Input 
            placeholder="Location" 
            type="query"
          />
          <Button size="tall" type="primary">get started</Button>
        </FlexColumn>
      </form>
      <h3 style={{ margin: "50px", color: `${colors.blue.regular}`, marginTop: "40px", marginBottom: "30px"}}>Busca por práctica</h3>
      <FlexColumn style={{gap: "3.5rem"}}>
        <PracticeCard 
          lawType="Family"
          practices={["Divorce", "Child Custody", "Child Support"]}
          icon={<MdFamilyRestroom style={{position: "absolute", top: "-20px"}} size="40px" color={`${colors.blue.regular}`}/>}
        />
        <PracticeCard 
          lawType="Employment"
          practices={["Discrimination", "Compensation", "Termination"]}
          icon={<BsBriefcaseFill style={{position: "absolute", top: "-20px"}} size="40px" color={`${colors.blue.regular}`}/>}
        />
        <PracticeCard 
          lawType="Real estate"
          practices={["Landlord", "Tenant", "Eviction"]}
          icon={<MdHouse style={{position: "absolute", top: "-20px"}} size="40px" color={`${colors.blue.regular}`}/>}
        />
      </FlexColumn>
      <Button style={{marginTop: "30px", marginBottom: "30px"}}type="secondary" size="wide">view all Legal Fields</Button>
      <h3 style={{ margin: "50px", color: `${colors.blue.regular}`, marginTop: "40px", marginBottom: "30px"}}>Ask a Lawyer</h3>
      <AskALawyer style={{marginBottom: "1rem"}}/>
      <Disclaimer />
    </FlexColumn>
  )
}

export default MainPage;