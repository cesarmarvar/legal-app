import styled from "@emotion/styled";
import { DivisionLine, FlexColumn, FlexRow, MainContainer, ProfilePic, VerticalLine } from "../utils";
import { CgProfile } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { useAuth } from "../context/auth-context";
import { Button } from "../components/button/button";
import { useEffect, useState } from "react";
import { Subtitle, Content } from "./lawyer-detail/styles";
import { getUsersLawyer } from "../services/user-services";
import { useNavigate } from "react-router-dom";


const Label = styled.label`
font-weight: 500;
font-size: 18px;
`

export const SingleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
`

function ShowProfile() {
  
  const navigate = useNavigate();

  const { user } = useAuth();
  const [ show, setShow ] = useState("basic-profile");
  const [ lawyer, setLawyer ] = useState("");

  useEffect(() => {
    getUsersLawyer().then(setLawyer).catch(console.log)
  }, [])


  return(
  <MainContainer>
    <h2 style={{textAlign: "center", marginBottom: "1rem"}}>My Profile</h2>
    <DivisionLine />
    <FlexRow style={{marginTop: "1rem"}}>
      <FlexColumn style={{gap: "2rem", marginTop: "1rem"}}>
        <div 
          style={{cursor: "pointer", border: "1px solid black"}}
          onClick={() => {setShow("basic-profile")}}
        >
          <CgProfile size="45px"/>
        </div>
        <div 
          style={{cursor: "pointer", border: "1px solid black"}}
          onClick={() => {setShow("lawyer-profile")}}
        >
          <GoLaw size="45px"/>
        </div>
      </FlexColumn>
      <VerticalLine style={{marginLeft: "1rem"}}/>
      {show === "basic-profile" ? 
        <FlexColumn style={{width: "100%", gap: "2rem"}}>
          <ProfilePic style={{margin: "0 auto"}}src={require('../assets/anonymous.png')}/>
          <FlexColumn style={{
            gap: "2rem",
            marginLeft: "2rem"
          }}>
            <FlexRow style={{gap: "1rem", alignItems: "center"}}>
              <Label>Username:</Label>
              <p>{user?.username}</p>
            </FlexRow>
            <FlexRow style={{gap: "1rem", alignItems: "center"}}>
              <Label>Email:</Label>
              <p>{user?.email}</p>
            </FlexRow>
            <Button type="primary" size="wide">Edit Profile<BiEdit size="20px" style={{marginLeft: "10px"}}/></Button>
          </FlexColumn>
        </FlexColumn> 
        
        : 

        <FlexColumn style={{width: "100%", gap: "0.8rem"}}>
          <ProfilePic style={{margin: "0 auto"}}src={require('../assets/anonymous.png')} />
          <SingleSectionContainer>
            <Subtitle>About {lawyer.lawyer_name}</Subtitle>
            <Content >{lawyer.bio}</Content>
          </SingleSectionContainer>
          <SingleSectionContainer>
            <Subtitle>Areas of Law</Subtitle>
            <Content>Civil, Penal, Criminal, Judicial</Content>
          </SingleSectionContainer>
          <SingleSectionContainer>
            <Subtitle>Credentials</Subtitle>
            <Content >{lawyer.credentials}</Content>
          </SingleSectionContainer>
          <SingleSectionContainer>
            <Subtitle>Payement information</Subtitle>
            <Content >{lawyer.payment_method}.</Content>
          </SingleSectionContainer>
          <SingleSectionContainer>
            <Subtitle>Social Media</Subtitle>
            <Content >{lawyer.social_media}.</Content>
          </SingleSectionContainer>
          <Button 
          onClick={() => navigate('/lawyer-profile/edit')}
            style={{
              margin: "0 auto", 
              marginTop: "2rem"}} 
            type="primary" 
            size="wide"
          >Edit Profile
          <BiEdit 
            size="20px" 
            style={{
              marginLeft: "10px"
            }}/></Button>
        </FlexColumn>
      }
    </FlexRow>
  </MainContainer>
)


}

export default ShowProfile;