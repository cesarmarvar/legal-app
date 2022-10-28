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
  // border: 1px solid black

`

export const ProfilePic = styled.img`
  height: 100px;
  width: 100px;
  marginTop: 2rem;
  marginBottom: 2rem;
  // overflow: hidden;
`

export const BigProfilePic = styled.img`
  height: 175px;
  width: 175px;
  marginTop: 2rem;
  marginBottom: 2rem;
  overflow: hidden;
`

export const ThumbnailPic = styled.img`
  height: 27px;
  width: 25px;
  margin-right: 0.3rem;
  margin-top: 1px;
  // overflow: hidden;
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