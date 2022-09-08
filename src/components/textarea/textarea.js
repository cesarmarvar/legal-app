import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";


const SingleTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  border-radius: 6px;
  padding: 4px;
  border: 3px solid ${colors.blue.regular};
  background-color: ${colors.white};
  font-family: ${fonts.primary};
  resize: none;
  &:focus {
    outline: none;
    border: 3px solid ${colors.orange.regular};
  }
  ::placeholder {
    color: ${colors.blue.regular};
  }
`

export function Textarea({id, name, value, placeholder, ...props}) {

  return(
    <SingleTextarea {...props}
    id={id}
    name={name}
    value={value}
    placeholder={placeholder}
    />
  )
}