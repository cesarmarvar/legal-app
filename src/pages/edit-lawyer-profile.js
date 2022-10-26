import { useEffect, useState } from "react";
import { Input } from "../components/input/input";
import { Textarea } from "../components/textarea/textarea";
import { editLawyerProfile } from "../services/lawyers-services";
import { getUsersLawyer } from "../services/user-services";
import { MainContainer, DivisionLine, FlexColumn, ProfilePic } from "../utils";
import { Button } from "../components/button/button";
import { useNavigate } from "react-router-dom";
import { getLawyerPhoto, uploadPhoto } from "../services/photo-services";
import { uploadImage } from "../services/cloudinary";
//import { getUserPhoto, uploadPhoto } from "../services/photo-services";

function EditProfilePage() {

  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState(null);

  const [ formData, setFormData ] = useState({
    id: 0,
    email: "",
    lawyer_name: "",
    years_licensed: 0,
    bio: "",
    credentials: "",
    payment_method: "",
    social_media: "",
    state_location: "",
    office_phone: 0,
    office_address: "",
  });

  const handlePhotoSubmit = async (e, id) => {
    e.preventDefault();

    if(image === "") return;
    const response = await uploadImage(image);
    setPhoto(response);
    const data = { photoable_id: id, photoable_type: "Lawyer", image: response }
    console.log({...data, image: response});
    await uploadPhoto(data);
  }

  const { 
    id, 
    lawyer_name, 
    years_licensed, 
    bio, 
    credentials, 
    payment_method, 
    social_media, 
    state_location, 
    office_address, 
    office_phone 
  } = formData

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getUsersLawyer();
        setFormData(response);
        const lawyerPhoto = await getLawyerPhoto(response.id);
        setPhoto(lawyerPhoto[0].image ? lawyerPhoto[0].image : null);
      }catch(e) {
        console.error(e.message);
      }
    }

    fetch();
  }, [])

  function handleUpdateSubmit(e){
    e.preventDefault();
    editLawyerProfile(id, formData).then(console.log).catch(console.log);
    navigate('/show-profile')
  }

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  // function handlePhotoSubmit(e) {
  //   e.preventDefault();
  //   const photoData = new FormData()
  //   photoData.append('photoable_id', id)
  //   photoData.append('image', photo)
  //   uploadPhoto(photoData).then(console.log).catch(console.log);
  // }

  // function handlePhotoChange(e) {
  //   e.persist();
  //   setPhoto(e.target.files);
  //   console.log(photo);
  // }

  return(
    <MainContainer>
      <h2>Edit Lawyer Profile</h2>
      <DivisionLine />
      <form onSubmit={(e) => handlePhotoSubmit(e, id)}>
        <FlexColumn style={{gap: "1rem"}}>
          <ProfilePic src={photo}/>
          <input 
            type="file"
            name="photo"
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
          />
            <Button type="primary" size="medium">Upload photo</Button>
        </FlexColumn>
      </form>
        <form style={{marginTop: "1rem"}} onSubmit={handleUpdateSubmit}>
          <FlexColumn style={{gap: "1.5rem"}}>
            <Input
              id="lawyer_name"
              name="lawyer_name"
              label="Name"
              value={lawyer_name}
              onChange={handleChange}
            />
            <Input 
              id="years_licensed"
              name="years_licensed"
              label="Years Licensed"
              value={years_licensed}
              onChange={handleChange}
            />
            <Textarea 
              id="bio"
              name="bio"
              label="Bio"
              value={bio}
              onChange={handleChange}
            />
            <Input 
              id="credentials"
              name="credentials"
              label="Credentials"
              value={credentials}
              onChange={handleChange}
            />
            <Input 
              id="payment_method"
              name="payment_method"
              label="Payment Methods"
              value={payment_method}
              onChange={handleChange}
            />
            <Input 
              id="social_media"
              name="social_media"
              label="Social Media"
              value={social_media}
              onChange={handleChange}
            />
            <Input 
              id="state_location"
              name="state_location"
              label="State Location"
              value={state_location}
              onChange={handleChange}
            />
            <Input 
              id="office_phone"
              name="office_phone"
              label="Office Phone"
              value={office_phone}
              onChange={handleChange}
            />
            <Input 
              id="office_address"
              name="office_address"
              label="Office Address"
              value={office_address}
              onChange={handleChange}
            />
            <Button style={{margin: "0 auto"}} type="primary" size="wide" >Submit</Button>
            <a
            style={{margin: "0 auto", textDecoration: "underline"}}
              onClick={() => navigate('/show-profile')} 
              href="###">Back</a>
          </FlexColumn>
        </form>
      
    </MainContainer>
  )
}

export default EditProfilePage;