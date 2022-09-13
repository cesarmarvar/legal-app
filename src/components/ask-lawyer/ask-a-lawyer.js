import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { Button } from "../button/button";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FlexRow } from "../../utils";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border: 3px solid ${colors.blue.regular};
  color: ${colors.blue.regular};
  min-height: 200px;
  width: 350px;
  padding: 1rem;
  border-radius: 6px;
  gap: 6px;
`
const MiniBox = styled.div`
  padding: 0.8rem;
  color: #000000B5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-family: ${fonts.primary};
  background-color: ${colors.gray.regular};
  border-radius: 6px;
  border: none;
`

const BigBox = styled(motion.div)`
  padding: 0.8rem;
  color: ${colors.black};
  background-color: ${colors.gray.regular};
  border-radius: 6px;
  border: none;
`

export function AskALawyer() {
  const [ showInstructions, setShowInstructions ] = useState(false);
  const navigate = useNavigate();

  function handleSetShowClick(e) {
    e.preventDefault();
    setShowInstructions(!showInstructions)
  };

  return(
    <Container>
      <h4 style={{marginBottom: "1rem"}}>Free, personalized answers from Expert Lawyers</h4>
      {!showInstructions ? 
        <MiniBox onClick={handleSetShowClick}>
          <p>How it works</p>
          <IoIosArrowDown size="20px"/>
        </MiniBox>
        :
        <BigBox as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}> 
           <FlexRow style={{cursor: "pointer", justifyContent: "space-between", color: "#000000B5", marginBottom: "1rem", fontWeight: "600"}} onClick={handleSetShowClick}>
            <p>How it works</p>
            <IoIosArrowUp size="20px"/>
          </FlexRow>
          <div style={{fontWeight: "500"}}>
            <div>
              <p>Ask your question-it's free and anonymous.</p>
              <p>Get notified when a lawyer responds-usually within 12 hours.</p>
              <p>Ask follow-up questions-make sure you understand your options.</p>
            </div><br />
            <p><strong>Tips for asking questions:</strong></p><br />
            <div>
              <p>Provide key details, but don't feel like you have to thell the whole story.</p>
              <p>Ask a concise question-be brief and to the point.</p>
            </div>
          </div>
        </BigBox>
        }
      <Button style={{marginTop: "1rem", marginBottom: "1rem", float: "right"}}
        type="secondary" 
        size="medium"
        onClick={() => navigate('/questions/new')}
        >get started
      </Button>
    </Container>
  )
}