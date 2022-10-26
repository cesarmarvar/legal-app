import { useEffect } from "react";
import { useState } from "react"
import { showLawyer } from "../../services/lawyers-services";
import { DivisionLine, FlexColumn, FlexRow, ProfilePic } from "../../utils";
import { Button } from "../../components/button/button";
import { printRatingStars } from "../lawyers";
import { getLawyerReviews } from "../../services/reviews-services";
import { Content, SectionContainer, Subtitle } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
// import { getLawyerPhoto } from "../../services/photo-services";


function formatReviewerName(name) {
  return name === null ? "Anonymous" : name
}

export function LawyerDetailPage() {
 
  const [ lawyer, setLawyer ] = useState("");
  const [ reviews, setReviews ] = useState([]);
  // const [ lawyerPhoto, setLawyerPhoto ] = useState();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    showLawyer(params.id)
    .then(setLawyer)
    .catch(console.log)
    getLawyerReviews(params.id)
    .then(setReviews)
    .catch(console.log)
    // getLawyerPhoto(params.id)
    // .then((photo) => setLawyerPhoto(photo[0].image))
    // .catch(console.log)
  }, [params])


  return(
    <>
      <FlexColumn style={{gap: "1rem", margin: "2rem", alignItems: "center"}}>
        <h3 style={{textAlign: "center"}}>{lawyer.lawyer_name}</h3>
        <DivisionLine />
        <ProfilePic 
          // src={require('../../assets/anonymous.png')} 
          src={lawyer.image} 
        />
        <Button size="widest" type="primary">Website</Button>
      </FlexColumn>
      <SectionContainer>
        <Subtitle>About {lawyer.lawyer_name}</Subtitle>
        <Content >{lawyer.bio}</Content>
        <DivisionLine />
      </SectionContainer>
      <SectionContainer>
        <Subtitle>Areas of Law</Subtitle>
        <Content>Civil, Penal, Criminal, Judicial</Content>
        <DivisionLine />
      </SectionContainer>
      <SectionContainer>
        <Subtitle>Credentials</Subtitle>
        <Content >{lawyer.credentials}</Content>
        <DivisionLine />
      </SectionContainer>
      <SectionContainer>
        <Subtitle>Payement information</Subtitle>
        <Content >{lawyer.payment_method}.</Content>
        <DivisionLine />
      </SectionContainer>
      <SectionContainer>
        <Subtitle>Social Media</Subtitle>
        <Content >{lawyer.social_media}.</Content>
        <DivisionLine />
      </SectionContainer>
      <FlexRow style={{gap: "1rem", margin: "2rem", justifyContent: "space-between"}}>
        <Subtitle style={{fontSize: "22px"}}>Reviews</Subtitle>
        <FlexRow style={{alignItems: "center"}}>
          {printRatingStars(lawyer.score?.average_rating)}
          <Content>({lawyer.score?.reviews_count})</Content>
        </FlexRow>
      </FlexRow>
      <SectionContainer>
        {reviews.map((review, index) => {
          return(
                <FlexColumn key={index} style={{gap: "6px", marginBottom: "1rem"}}>
                  <Subtitle>{review.title}</Subtitle>
                  <FlexRow style={{marginTop: "4px", marginBottom: "4px"}}>
                    {printRatingStars(review.rating)}
                  </FlexRow>
                  <p style={{color: "gray", fontSize: "12px"}}>Posted by {formatReviewerName(review.reviewer_name)} on {review.created_at}</p>
                  <p>{review.content}</p>
                </FlexColumn>
                )
        })}
        <Button 
          type="ghost" 
          size="wide" 
          style={{margin: "0 auto"}}
          onClick={() => navigate(`/reviews/new/${lawyer.id}`)}
        >Review {lawyer.lawyer_name}</Button>
      </SectionContainer>
    </>

  )
}