import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Textarea } from "../../components/textarea/textarea";
import { showQuestion } from "../../services/questions-services";
import { colors } from "../../styles/colors";
import { DivisionLine, FlexColumn, MainContainer } from "../../utils";


function ShowQuestion() {

  const [ question, setQuestion ] = useState([]);

  const params = useParams();

  useEffect(() => {
    showQuestion(params.id)
    .then(setQuestion)
    .catch(console.log)
  }, [])

  return(
    <MainContainer>
      <FlexColumn
      style={{
        gap: "1rem",
        textAlign: "justify"
      }}>
        <h3 style={{
          color: `${colors.blue.regular}`
        }}>{question.question}</h3>
        <DivisionLine />
        <h4>Explanation:</h4>
        <p>{question.explanation}</p>
        <Textarea />
      </FlexColumn>
    </MainContainer>
  )
}

export default ShowQuestion;