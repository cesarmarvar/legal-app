import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/button";
import { Input } from "../components/input/input";
import { Textarea } from "../components/textarea/textarea";
import { createContact } from "../services/contacts-services";
import { DivisionLine, FlexColumn, MainContainer } from "../utils";


function CreateContact() {

  const navigate = useNavigate();

  const [ formData, setFormData ] = useState({
    username: "",
    phone_number: "",
    email: "",
    title: "",
    situation: "",
    speciality_id: "",
    location: "",
  });

  const { username, phone_number, email, title, situation, speciality_id, location } = formData;

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    createContact(formData).then(console.log).catch(console.log);
    navigate("/");
  };

  return(
    <MainContainer>
      <h1 style={{textAlign: "center"}}>Contact Me</h1>
      <DivisionLine />
      <form onSubmit={handleSubmit}>
        <FlexColumn style={{gap: "1rem", marginTop: "2rem"}}>
        <Input 
            label="My name"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        <Input 
            label="Phone number"
            id="phone_number"
            name="phone_number"
            value={phone_number}
            onChange={handleChange}
          />
        <Input 
            label="Email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        <Input 
            label="Title"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        <Textarea 
            label="Situation"
            id="situation"
            name="situation"
            value={situation}
            onChange={handleChange}
          />
          <Input 
            label="Speciality"
            id="speciality_id"
            name="speciality_id"
            value={speciality_id}
            onChange={handleChange}
          />
          <Input 
          label="Location"
          id="location"
          name="location"
          value={location}
          onChange={handleChange}
        />
        </FlexColumn>
        <Button  style={{margin: "2rem auto"}}type="secondary" size="wide">Submit</Button>
      </form>
    </MainContainer>

  )
};

export default CreateContact;

// Parameters: {
//   "username"=>"titao",
//   "phone_number"=>"994417421", 
//   "email"=>"cmartinez@mail.com", 
//   "title"=>"My contact", 
//   "situation"=>"I'm in jail", 
//   "speciality_id"=>"2", 
//   "location"=>"Lima", 
//   "contact"=>{
//     "username"=>"titao", 
//     "phone_number"=>"994417421", 
//     "email"=>"cmartinez@mail.com", 
//     "title"=>"My contact", 
//     "situation"=>"I'm in jail", 
//     "speciality_id"=>"2", 
//     "location"=>"Lima"
//   }
// }