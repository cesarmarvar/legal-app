import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

const SingleSelect = styled.select`
  height: 2.5rem;
  width: 18rem;
  padding-left: 0.8rem;
  display: flex;
  font-weight: 600;
  text-transform: capitalize;
  font-family: ${fonts.primary};
  background-color: ${colors.gray.regular};
  border-radius: 6px;
  border: none;
`

export function Select({label, name, options = [], ...props}) {

  return(
    <>
      <label>{label}</label>
      <SingleSelect defaultValue="How it works" name={name}>
        {options.map((opt, index) => {
          return <option key={index}>{opt}</option>
        })}
      </SingleSelect>
    </>
  )
}