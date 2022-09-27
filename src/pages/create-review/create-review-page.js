import { DivisionLine, FlexRow, MainContainer, FlexColumn } from "../../utils";
import { FaStar } from "react-icons/fa";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button"
import { Textarea } from "../../components/textarea/textarea";
import { InputContainer, Label } from "./styles";
import { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import "../../components/star-rating/star-rating.css"
import { createReview } from "../../services/reviews-services";
import { useNavigate, useParams } from "react-router-dom";
import { showLawyer } from "../../services/lawyers-services";

export function CreateReview() {

  const navigate = useNavigate();
  const params = useParams();

  const [hover, setHover] = useState(null);

  const [ lawyer, setLawyer ] = useState("")
  
  useEffect(() => {
    showLawyer(params.id)
    .then(setLawyer)
    .catch(console.log)
     // eslint-disable-next-line
  }, [])

  const [ formData, setFormData ] = useState({
    rating: null,
    title: "",
    content: "",
    context: "",
    name: "",
    email: "",
    lawyer_id: params.id
  });
  
  // eslint-disable-next-line
  const { rating, title, content, context, name, email } = formData;

  function handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  function handleRating(rating) {
    setFormData({...formData, rating: rating})
  }

  function handleContextClick(option) {
    setFormData({...formData, context: option})
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    console.log(formData)
    createReview(formData)
    .then(console.log)
    .catch(console.log)
    navigate(`/lawyers/${params.id}`)
  }

  return(
    <MainContainer>
      <h2>Review {lawyer.name}</h2>
      <DivisionLine />
      <main style={{marginTop: "1.5rem", marginBottom: "1.5rem"}}>
        <form onSubmit={handleReviewSubmit}>
          <FlexColumn style={{gap: "1.5rem"}}>
            <Label htmlFor="title">Select a rating</Label>
            <div>
              {[...Array(5)].map((star, idx) => {
                const ratingValue = idx + 1;
                return (
                  <label key={idx}>
                    <input 
                      className="radioInput" 
                      type="radio" 
                      name="rating"
                      value={ratingValue}
                      onClick={() => handleRating(ratingValue)}
                    ></input>
                    <FaStar 
                      className="star" 
                      size="35px"
                      onMouseEnter={() => {setHover(ratingValue)}}
                      onMouseLeave={() => {setHover(null)}}
                      color={ ratingValue <= (hover || rating) ? `${colors.orange.stars}` : `${colors.gray.regular}`}
                    />        
                  </label>
                )
              })}
              { rating ? <p style={{fontSize: "13px"}}>The rating is {rating}/5.</p> : "" }
            </div>
            <InputContainer>
              <Input 
                id="title" 
                name="title"
                label="Add a title"
                value={title}
                onChange={handleChange}
                />
            </InputContainer>
            <InputContainer>
              <Textarea 
                id="content" 
                name="content" 
                type="textarea"
                value={content}
                label="Write your review"
                onChange={handleChange}
                />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="context">Was this a consultation or did you hire this attorney?</Label>
              <FlexRow style={{gap: "2rem"}}>
                <FlexRow style={{gap: "0.5rem"}}>
                  <input 
                    type="radio" 
                    id="Consulted" 
                    name="context" 
                    value="Consulted"
                    onClick={() => handleContextClick(0)}
                  />
                  <label htmlFor="Consulted">Consulted</label>
                </FlexRow>
                <FlexRow style={{gap: "0.5rem"}}>
                  <input 
                    type="radio" 
                    id="Hired" 
                    name="context" 
                    value="Hired"
                    onClick={() => handleContextClick(1)}
                  />
                  <label htmlFor="Hired">Hired</label>
                </FlexRow>
              </FlexRow>
            </InputContainer>
            <InputContainer>
              <Input 
                id="name" 
                name="name"
                label="Your name"
                value={name}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <Input 
                id="email" 
                name="email" 
                type="email"
                value={email}
                label="Your email address"
                onChange={handleChange}
              />
            </InputContainer>
            <Button 
              type="secondary" 
              size="wide" 
              style={{margin: "0 auto"}}
            >Submit</Button>
          </FlexColumn>
        </form>
      </main>
      <p 
      style={{
        textAlign: "justify", 
        marginTop: "1.5rem"
      }}
      >By clicking the “Submit” button, you agree to Legal’s terms of use. Please see our community guidelines and privacy policy for information on posting to Legal and how we collect, use, and share information you provide to us.</p>
    </MainContainer>
  )
}