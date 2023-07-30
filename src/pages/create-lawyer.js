import { DivisionLine, MainContainer, FlexColumn, ProfilePic } from "../utils";
import { Input } from "../components/input/input";
import { useState } from "react";
import { Textarea } from "../components/textarea/textarea";
import { Button } from "../components/button/button";
import { createLawyer } from "../services/lawyers-services";
import { uploadImage } from "../services/cloudinary";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";


// function initMapScript() {
//   if(window.google) return Promise.resolve();

//   const src = `https://maps.googleapis.com/maps/api/js?key=${process.env.LEGALAPP_GOOGLE_MAP_API}&libraries=places&v=weekly`;
//   return LoadAsyncScript(src);
// };

function CreateLawyerPage(){

  const { user } = useAuth();
  const navigate = useNavigate();

  const [ photo, setPhoto ] = useState();
  const [ formData, setFormData ] = useState({
    lawyer_name: "",
    years_licensed: "",
    bio: "",
    credentials: "",
    payment_method: "",
    social_media: "",
    state_location: "",
    office_address: "",
    office_phone: "",
    cellphone: "",
    email: "",
    image: "",
    lat: 123,
    long: 123,
    user_id: user.id
  });

  const { 
    lawyer_name, 
    years_licensed, 
    bio, 
    credentials, 
    payment_method, 
    social_media, 
    state_location,
    office_address,
    office_phone,
    cellphone,
    email, 
    image,
    lat,
    long,
   } = formData


  //  function initAutocomplete() {
  //   if(!addressInput.current) return;
  //   const autocomplete = new window.google.maps.places.Autocomplete(addressInput.current);
  //   autocomplete.setFields(["address_component", "geometry"]);
  //   autocomplete.addListener("place_changed", () => {
  //     const place = autocomplete.getPlace();
  //     setFormData(data => ({
  //       ...data,
  //       lat: place.geometry.location.lat(),
  //       long: place.geometry.location.lng(),
  //     }));
  //   });
  // };

  const handlePhotoSubmit = async (e) => {
    e.preventDefault();

    // if(image === "") return;
    const response = await uploadImage(photo);
    setFormData({...formData, image: response});
  }
  // console.log(image)

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  function handleSubmit(e){
    e.preventDefault();
    // console.log(formData);
    console.log(user);
    console.log(user.id);
    createLawyer(formData).then(console.log).catch(console.log)
    navigate(`/`)
  };

  return(
    <MainContainer>
      <h1>Build Profile</h1>
      <DivisionLine />
      <form onSubmit={handlePhotoSubmit}>
      {/* <form > */}
        <FlexColumn style={{gap: "1rem"}}>
          <div>
            <ProfilePic src={image ? image : require("../assets/anonymous.png")}/>
            <input 
              type="file"
              name="photo"
              accept='image/*'
              onChange={(e) => {
                setPhoto(e.target.files[0])
                // handlePhotoSubmit();
              }}
            />
          </div>
          <Button type="primary" size="medium">Set photo</Button>
        </FlexColumn>
      </form>
      <form onSubmit={handleSubmit}>
        <FlexColumn 
          style={{
            marginTop: "1rem",
            gap: "1rem"
          }}
        >
          <Input 
            label="Name"
            id="lawyer_name"
            name="lawyer_name"
            value={lawyer_name}
            onChange={handleChange}
          />
          <Input 
            label="Years licensed"
            id="years_licensed"
            name="years_licensed"
            value={years_licensed}
            onChange={handleChange}
          />
          <Textarea 
            label="Bio"
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
          />
          <Input 
            label="Credentials"
            id="credentials"
            name="credentials"
            value={credentials}
            onChange={handleChange}
          />
          <Input 
            label="Payment Methods"
            id="payment_method"
            name="payment_method"
            value={payment_method}
            onChange={handleChange}
          />
          <Input 
            label="Social Media"
            id="social_media"
            name="social_media"
            value={social_media}
            onChange={handleChange}
          />
          <Input 
            label="State Location"
            id="state_location"
            name="state_location"
            value={state_location}
            onChange={handleChange}
          />
          <Input 
            label="Office address"
            id="office_address"
            name="office_address"
            value={office_address}
            onChange={handleChange}
          />
          <Input 
            label="Office phone"
            id="office_phone"
            name="office_phone"
            value={office_phone}
            onChange={handleChange}
          />
          <Input 
            label="Cellphone"
            id="cellphone"
            name="cellphone"
            value={cellphone}
            onChange={handleChange}
          />
          <Input 
            label="Email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        <Button 
          style={{
            margin: "0 auto"
          }}
          type="primary" 
          size="wide" 
          >Create profile</Button>
        </FlexColumn>
      </form>
    </MainContainer>
  )

};

export default CreateLawyerPage;