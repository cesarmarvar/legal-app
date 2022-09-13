import { useState } from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Textarea } from "../../components/textarea/textarea";
import { createQuestion } from "../../services/questions-services";
import { DivisionLine, FlexRow, FlexColumn, MainContainer } from "../../utils"
import { InputContainer, Label } from "../create-review/styles";


function CreateQuestionPage() {

  const [ questionData, setQuestionData ] = useState({
    question: "",
    explanation: "",
    confirmation: "",
    user_id: 1
  })

  const { question, explanation } = questionData

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setQuestionData({...questionData, [name]: value});
  }

  function handleConfirmationClick(option){
    setQuestionData({...questionData, confirmation: option})
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(questionData);
    createQuestion(questionData)
    .then(console.log)
    .catch(console.log)
  }

  return (
  <MainContainer>
    <h1>Ask a Lawyer</h1>
    <DivisionLine />
    <main style={{marginTop: "1.5rem", marginBottom: "1.5rem"}}>
      <form>
        <FlexColumn style={{gap: "1rem"}}>
          <Input 
            id="question"
            name="question"
            label="Ask your question"
            value={question}
            onChange={handleChange}
          />
          <Textarea 
            id="explanation"
            name="explanation"
            label="Explain your situation"
            value={explanation}
            onChange={handleChange}
          />
          <InputContainer style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}>
            <Label htmlFor="context">Do you plan to hire an attorney?</Label>
            <FlexRow style={{gap: "2rem"}}>
              <FlexRow style={{gap: "0.5rem"}}>
                <input 
                  type="radio" 
                  id="Yes" 
                  name="confirmation" 
                  value="Yes"
                  onClick={() => handleConfirmationClick("yes")}
                />
                <label htmlFor="Yes">Yes</label>
              </FlexRow>
              <FlexRow style={{gap: "0.5rem"}}>
                <input 
                  type="radio" 
                  id="No" 
                  name="confirmation" 
                  value="No"
                  onClick={() => handleConfirmationClick("no")}
                />
                <label htmlFor="No">No</label>
              </FlexRow>
              <FlexRow style={{gap: "0.5rem"}}>
                <input 
                  type="radio" 
                  id="Maybe" 
                  name="confirmation" 
                  value="Maybe"
                  onClick={() => handleConfirmationClick("maybe")}
                />
                <label htmlFor="Maybe">Maybe</label>
              </FlexRow>
            </FlexRow>
          </InputContainer>
          <Button 
            type="secondary" 
            size="wide" 
            style={{margin: "0 auto"}}
            onClick={handleSubmit}
          >Submit</Button>
        </FlexColumn>
      </form>
    </main>
  </MainContainer>
  )
};

export default CreateQuestionPage;