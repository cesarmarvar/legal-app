import styled from "@emotion/styled"
import { colors } from "../../styles/colors"

const Container = styled.div`
  height: 150px;
  width: 325px;
  cursor: pointer;
  background-color: ${colors.gray.regular};
  border-radius: 6px;
  padding: 1rem;
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  transition: .3s ease-in;
  &:hover {
    transform: scale(1.1);
`

export function PracticeCard({lawType, practices, icon}) {

  return(
    <div>
      <Container>
        {icon}
        <h4>{lawType}</h4>
        <div>
          {practices.map((prac, index) => {
          return <p key={index}>{prac}</p>})}
        </div>
      </Container>
    </div>
  )
}