import styled from '@emotion/styled';
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

function buttonType(type) {
  switch (type) {
    case "primary":
      return`
        color: white;
        background-color: ${colors.orange.regular};
        border: none;
        &: hover {
          background-color: #cc7614d2
        }
      `;
    case "secondary":
      return`
        color: white;
        background-color: ${colors.blue.regular};
        border: none;
        &: hover {
          background-color: #2e3e75
        }
      `
    case "ghost":
      return`
        color: ${colors.blue.opaque_1};
        background-color: ${colors.white};
        border: 2px solid ${colors.blue.regular};
        &: hover {
          background-color: #e6e6e6
        }
      `
  }
}

function buttonSize(size) {
  switch (size) {
    case "tall":
      return`
        width: 260px;
        height: 56px;
      `
    case "wide":
      return`
        width: 327px;
        height: 42px;
      `
    case "small":
      return`
        width: 107px;
        height: 23px;
      `
    case "xs":
      return`
        width: 28.23px;
        height: 27px
      `
  }
}

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: .05s ease-in;
  text-transform: capitalize;
  font-family: ${fonts.primary};
  font-weight: 500;
  &:active {
    margin-top: 2px;
  }
  ${(props) => buttonType(props.type)}
  ${(props) => buttonSize(props.size)}
`

function Button({children, ...props}) {

return(
    <StyledButton {...props} >
      {children}
    </StyledButton>
  )
}

export default Button;