import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showContact } from "../services/contacts-services";
import { colors } from "../styles/colors";
import { DivisionLine, FlexColumn, MainContainer } from "../utils";


function ShowContact() {

  const navigate = useNavigate();
  const params = useParams();
  const [ contact, setContact ] = useState({});
  
  useEffect(() => {
    showContact(params.id).then(setContact).catch(console.log);
  }, []);

  return(
    <MainContainer>
      <FlexColumn style={{gap: "1rem"}}>
        <h1 style={{color: `${colors.blue.regular}`}}>{contact.title}</h1>
        <DivisionLine />
        <h4>Contact name:</h4>
        <p>{contact.username}</p>
        <h4>Situation:</h4>
        <p>{contact.situation}</p>
        <h4>Location:</h4>
        <p>{contact.location}</p>
        <h4>Email:</h4>
        <p>{contact.email}</p>
        <h4>Phone:</h4>
        <p>{contact.phone_number}</p>
        <a
        style={{margin: "0 auto", textDecoration: "underline"}}
          onClick={() => navigate('/contacts')} 
          href="###">Back</a>
      </FlexColumn>
    </MainContainer>
  )

};

export default ShowContact;