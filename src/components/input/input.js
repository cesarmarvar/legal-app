import styled from "@emotion/styled";
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

function inputType(opt) {
  switch (opt) {
    case "query":
      return`
        height: 56px;
        width: 260px;
        text-align: center;
        color: ${colors.blue.regular};
        font-weight: 500;
      `
    default:
      return`
        height: 45px;
        width: 100%;
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
  ${(props) => inputType(props.opt)};

  ::placeholder {
    color: ${colors.blue.regular};
  }
`

const Label = styled.label`
font-weight: 500;
font-size: 18px;
`

export function Input({id, name, value, placeholder, onChange, label, type, ...props}) {

  return(
    <>
        <Label htmlFor={id || name}>{label}</Label>
        <SingleInput {...props}
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
    </>
  )
}