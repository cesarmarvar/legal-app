import styled from "@emotion/styled"
import { fonts } from "../../styles/fonts"

export const Title = styled.h1`
  margin: 0px;
  color: rgba(28, 32, 119, 0.91);
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`
export const Menu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
`

export const MenuOption = styled.button`
  font-weight: 600;
  font-family: ${fonts.primary};
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  border: none;
  background-color: inherit;
`