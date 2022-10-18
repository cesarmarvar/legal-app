import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../services/questions-services";
import { colors } from "../../styles/colors";
import { DivisionLine, FlexColumn, MainContainer } from "../../utils";

function IndexQuestionsPage() {

  const [ questions, setQuestions ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getQuestions()
    .then(setQuestions)
    .catch(console.log)
  }, [])

  return(
    <MainContainer>
      <h3 
        style={{
          textAlign: "center", 
          marginBottom: "1rem"
        }}
        >Free Q&A</h3>
      {questions.map((q, index) => {
        return(
            <div key={index}>
            <FlexColumn
              style={{
                gap: "0.5rem",
                marginBottom: "1rem"
              }}>
              <DivisionLine />
              <h4 
                style={{
                  marginTop: "1rem", 
                  color: `${colors.blue.regular}`,
                  cursor: "pointer"
                }}
                onClick={() => navigate(`/questions/${q.id}`)}
              >{q.question}</h4>
              <p 
                style={{
                  marginLeft: "0.8rem", 
                  fontSize: "12px", 
                  fontWeight: "600"
                }}
              >{ q.answers_count > 0 ? `Answered by ${q.answers_count} attorneys ` : "No answers yet"}</p>
              <p 
                style={{
                  textAlign: "justify",
                  fontWeight: "600"
                  }}
                >{q.explanation}</p>
            </FlexColumn>
            <DivisionLine />
          </div>
        )
      })}
    </MainContainer>
  )
}

export default IndexQuestionsPage;