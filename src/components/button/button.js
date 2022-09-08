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
        background-color: ${colors.blue.opaque_1};
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
    default:
      return;
  }
}

function buttonSize(size) {
  switch (size) {
    case "tall":
      return`
        width: 260px;
        height: 56px;
      `
    case "widest":
      return`
        width: 100%;
        height: 42px;
      `
    case "wide":
      return`
        width: 327px;
        height: 42px;
      `
    case "medium":
      return`
        width: 132.07px;
        height: 44.02px;
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
    default:
      return;
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
    transform: scale(0.98);
  }
  ${(props) => buttonType(props.type)}
  ${(props) => buttonSize(props.size)}
`

export function Button({children, ...props}) {

return(
    <StyledButton {...props} >
      {children}
    </StyledButton>
  )
}