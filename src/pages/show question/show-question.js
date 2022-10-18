import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Button } from "../../components/button/button";
import { getQuestionAnswers, showQuestion } from "../../services/questions-services";
import { colors } from "../../styles/colors";
import { ThinDivisionLine, FlexColumn, MainContainer, FlexRow } from "../../utils";


function ShowQuestion() {

  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const params = useParams();

  useEffect(() => {
    showQuestion(params.id)
    .then(setQuestion)
    .catch(console.log)
    getQuestionAnswers(params.id)
    .then(setAnswers)
    .catch(console.log)
    // eslint-disable-next-line
  }, [])

  return (<>
    <MainContainer style={{ backgroundColor: "white", borderRadius: "6px" }}>
      <FlexColumn
        style={{
          padding: "6px",
          gap: "1rem",
          textAlign: "justify"
        }}>
        <h3 style={{
          color: `${colors.blue.regular}`
        }}>{question.question}</h3>
        <p>{question.explanation}</p>
        <ThinDivisionLine />
        <FlexRow style={{ gap: "8px" }}>
          <p style={{ border: `1px solid ${colors.gray.regular}`, borderRadius: "10px", fontSize: "14px" }}>Crime</p>
          <p style={{ border: `1px solid ${colors.gray.regular}`, borderRadius: "10px", fontSize: "14px" }}>Weapons</p>
          <p style={{ border: `1px solid ${colors.gray.regular}`, borderRadius: "10px", fontSize: "14px" }}>Whatever</p>
        </FlexRow>
      </FlexColumn>
    </MainContainer>
    <h3 style={{ marginLeft: "2rem", marginBottom: "1rem" }}>{answers ? `${answers.length} attorney answer` : "No attorney answers yet"}</h3>
    <div style={{ backgroundColor: "white", borderRadius: "6px", margin: "2rem" }}>
      {answers.map((ans, idx) => {
        return (
          <FlexColumn style={{ padding: "8px", gap: "8px" }} key={idx}>
            <p style={{ color: "gray", fontSize: "12px" }}>Posted on {ans.created_at} </p>
            <p >{ans.answer}</p>
          </FlexColumn>
        )
      })
      }
    </div>
  </>
  )
}

export default ShowQuestion;