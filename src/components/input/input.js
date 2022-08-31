import styled from "@emotion/styled";
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

function inputType(type) {
  switch (type) {
    case "query":
      return`
        height: 56px;
        width: 260px;
        text-align: center;
        color: ${colors.blue.regular};
        font-weight: 500;
      `
    case "text":
      return`
        height: 36px;
        width: 325px;
      `
  }
}

const SingleInput = styled.input`
  border-radius: 6px;
  padding: 4px;
  border: 3px solid ${colors.blue.regular};
  background-color: ${colors.white};
  font-family: ${fonts.primary};
  &:focus {
    outline: none;
    border: 3px solid ${colors.orange.regular};
  }
  ${(props) => inputType(props.type)};

  ::placeholder {
    color: ${colors.blue.regular};
  }
`

export function Input({id, name, value, placeholder, ...props}) {

  return(
    <SingleInput {...props}
    id={id}
    name={name}
    value={value}
    placeholder={placeholder}
    />
  )
}