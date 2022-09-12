import styled from '@emotion/styled';
import { colors } from './styles/colors';

export const FlexRow = styled.div`
  display: flex;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const DivisionLine = styled.div`
  border: 1px solid ${colors.gray.regular};
  width: 100%;
  height: 0px;
`

export const MainContainer = styled.div`
  margin: 2rem;
`