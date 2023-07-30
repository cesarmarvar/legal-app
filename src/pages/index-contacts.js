import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContacts } from "../services/contacts-services";
import { DivisionLine, FlexColumn, MainContainer, parseSpeciality, FlexRow } from "../utils";

function IndexContacts() {

  const navigate = useNavigate();

  const [ contacts, setContacts ] = useState();

  useEffect(() => {
    getContacts()
    .then(setContacts)
    .catch(console.log);
  }, []);

  return(
    <MainContainer>
      <h1>Publicaciones de Leads</h1>
      <DivisionLine />
        {contacts?.map((contact, idx) => {
          return(
            <FlexColumn 
            key={idx}
            style={{gap: "8px", margin: "2rem 0"}}
            >
              <h5 
                style={{cursor: "pointer"}}
                onClick={() => navigate(`/contacts/${contact.id}`)}
              >{contact.title}</h5>
              {/* <p>{contact.username}</p> */}
              <p>{contact.situation}</p>
              <FlexRow>
                <p style={{marginBottom: "1rem", border: "1px solid black", borderRadius: "8px", padding: "0 4px"}}
                >Materia: {parseSpeciality(contact.speciality_id)}</p>
              </FlexRow>
              <DivisionLine />
            </FlexColumn>
          )
        })}
    </MainContainer>
  )
};

export default IndexContacts;