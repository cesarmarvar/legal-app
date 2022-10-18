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

export const ProfilePic = styled.img`
  height: 87px;
  width: 103px;
  marginTop: 2rem;
  marginBottom: 2rem;
`

export const VerticalLine = styled.div`
  border: 1px solid ${colors.gray.regular};
  width: 0px;
  height: 100vw;
`

export const ThinDivisionLine = styled.div`
  border-top: 1px solid ${colors.gray.regular};
  width: 100%;
  height: 0px;
`