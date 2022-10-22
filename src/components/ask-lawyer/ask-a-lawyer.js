import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { Button } from "../button/button";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FlexColumn, FlexRow } from "../../utils";
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
      <h4 style={{marginBottom: "1rem", textAlign: "center"}}>Respuestas gratuitas y personalizadas de abogados expertos</h4>
      {!showInstructions ? 
        <MiniBox onClick={handleSetShowClick}>
          <p>¿Cómo funciona?</p>
          <IoIosArrowDown size="20px"/>
        </MiniBox>
        :
        <BigBox as={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}> 
           <FlexRow style={{cursor: "pointer", justifyContent: "space-between", color: "#000000B5", marginBottom: "1rem", fontWeight: "600"}} onClick={handleSetShowClick}>
            <p>¿Cómo funciona?</p>
            <IoIosArrowUp size="20px"/>
          </FlexRow>
          <div style={{fontWeight: "500", textAlign: "justify"}}>
            <FlexColumn style={{gap: "6px"}}>
              <p>Haz tu pregunta de manera anónima y gratuita.</p>
              <p>Recibe una notificación cuando un abogado responda.</p>
              <p>Haz repreguntas. Asegúrate de entender tus opciones.</p>
            </FlexColumn><br />
            <p><strong>Algunos tips:</strong></p><br />
            <FlexColumn style={{gap: "6px"}}>
              <p>Se conciso y menciona detalles clave. No necesitas contar la historia completa.</p>
              <p>Se corto y ve al grano.</p>
            </FlexColumn>
          </div>
        </BigBox>
        }
      <Button style={{marginTop: "1rem", marginBottom: "1rem", float: "right"}}
        type="secondary" 
        size="medium"
        onClick={() => navigate('/questions/new')}
        >pregunta 
      </Button>
    </Container>
  )
}