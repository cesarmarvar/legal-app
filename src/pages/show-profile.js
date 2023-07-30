import styled from "@emotion/styled";
import { DivisionLine, FlexColumn, FlexRow, MainContainer } from "../utils";
import { useAuth } from "../context/auth-context";
import { Button } from "../components/button/button";
import { useEffect, useRef, useState } from "react";
import { editUser, getUser, getUsersLawyer } from "../services/user-services";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";
import { printRatingStars } from "./lawyers";
import { Input } from "../components/input/input";

export const SingleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
`

const SectionContainer = styled.div`
  max-height: 350px;
  min-width: 400px;
  border-radius: 8px;
  box-shadow: 2px 2px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`

const P = styled.p`
  color: ${colors.blue.regular};
  font-weight: 600
`

const EditModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000bf;
  z-index: 9999;
`

const EditProfileBox = styled.div`
min-width: 500px;
min-height: 600px;
background: #F6F6F9;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
gap: 2rem;
padding: 3rem
`

// function LoadAsyncScript(src) {
//   return new Promise(resolve => {
//     Object.assign(script, {
//       type: "text/javascript",
//       async: true,
//       src
//     });
//     script.addEventListener("load", () => resolve(script));
//     document.head.appendChild(script);
//   });
// };

function ShowProfile() {

  const navigate = useNavigate();

  // const addressInput = useRef(null);
  
  const { user, logout } = useAuth();
  const [lawyer, setLawyer] = useState("");
  const [ showModal, setShowModal ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({
    username: "",
    email: "",
    // password: "",
  });
  

console.log(user)
  const { username, email } = currentUser;

  useEffect(() => {
    getUsersLawyer().then(setLawyer).catch(console.log);
    getUser(user.id).then(setCurrentUser).catch(console.log);
    // eslint-disable-next-line
  }, []);

  // console.log(user);

  function handleClick() {
    setShowModal(!showModal);
  };

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setCurrentUser({...currentUser, [name]: value});
  };

  function handleEditProfilSubmit(e) {
    e.preventDefault();

    editUser(currentUser)
    setShowModal(!showModal);
    window.location.reload(false);
  };

  return (
    <MainContainer>
      {
        showModal ? (
        <EditModal>
          <EditProfileBox>
            <h2>Edit Acount Detail</h2>
            <form onSubmit={handleEditProfilSubmit}>
            <FlexColumn style={{gap: "3rem"}}>
                <Input
                    id="username"
                    name="username"
                    label="Username"
                    value={username}
                    onChange={handleChange}
                />
                <Input 
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
                {/* <Input 
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                /> */}
                <Button 
                  style={{margin: "0 auto"}} 
                  type="primary" 
                  size="medium"
                >Submit edit</Button>
                <a 
                href="###"
                style={{cursor: "pointer", textDecoration: "underline"}}
                onClick={() => {
                  navigate('/show-profile');
                  setShowModal(!showModal);
                }}>Back</a>
            </FlexColumn>
            </form>
          </EditProfileBox>
        </EditModal>
        )
        :
        null
      }
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>My Account</h2>
      <DivisionLine style={{marginBottom: "2rem"}}/>
      <FlexColumn style={{gap: "4rem", alignItems:"center"}}>
        <SectionContainer>
          <FlexColumn
            style={{ gap: "1.5rem" }}>
            <h3
              style={{ textAlign: "center" }}
            >Account Detail</h3>
            <FlexRow
              style={{ justifyContent: "space-between" }}
            >
              <P>Username:</P>
              <p>{user.username}</p>
            </FlexRow>
            <FlexRow
              style={{ justifyContent: "space-between" }}
            >
              <P>Email:</P>
              <p>{user.email}</p>
            </FlexRow>
            <Button style={{margin: "0 auto"}}size="medium" type="secondary" onClick={handleClick}>Edit</Button>
          </FlexColumn>
        </SectionContainer>
        <SectionContainer>
        <FlexColumn
            style={{ gap: "1.5rem" }}>
            <h3
              style={{ textAlign: "center" }}
            >Legalapp Plan</h3>
            <FlexRow
              style={{ justifyContent: "space-between" }}
            >
              <P>Package:</P>
              <p>Free</p>
            </FlexRow>
            <Button style={{margin: "0 auto"}}type="secondary" size="medium">Upgrade plan</Button>
          </FlexColumn>
        </SectionContainer>
        <SectionContainer>
        <FlexColumn
          style={{ gap: "1.5rem" }}>
          <h3 style={{ textAlign: "center" }}>Lawyer Profile</h3>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <P>Lawyer:</P>
            <p>{lawyer.lawyer_name}</p>
          </FlexRow>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <P>Email:</P>
            <p>{lawyer.email}</p>
          </FlexRow>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <P>Rating:</P>
            <FlexRow style={{gap: "6px"}}>
              <FlexRow style={{gap: "2px", alignItems: "center"}}>
                {printRatingStars(lawyer.average_rating)}
              </FlexRow>
              <p>({lawyer.reviews_count})</p>
            </FlexRow>
          </FlexRow>
            <FlexRow style={{justifyContent: "space-between", marginBottom: "0.5rem"}}>
              <Button 
                type="primary" 
                size="medium"
                onClick={() => navigate(`/lawyers/${lawyer.id}`)}
              >View Profile</Button>
              <Button 
                type="primary" 
                size="medium"
                onClick={() => navigate(`/lawyer-profile/edit`)}
              >Edit Profile</Button>
            </FlexRow>
          </FlexColumn>
          <Button 
            style={{margin: "5px auto"}}
            type="ghost" 
            size="wide"
          >Sample Premium Profile now</Button>
        </SectionContainer>
      </FlexColumn>
      <Button 
        style={{ margin: "2rem auto" }}
        type="secondary" 
        size="wide"
        onClick={() => logout()}
      >Sign out</Button>
    </MainContainer>
  )


}

export default ShowProfile;