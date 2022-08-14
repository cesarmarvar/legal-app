import styled from "@emotion/styled"

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  max-width: 312px;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  font-size: 14px;
`

export function Disclaimer() {

  return(
    <Container>
        <p style={{textAlign: "center", fontWeight: "500"}}>
          Terms of Use Privacy Policy Cookie Policy Do Not Sell My Personal Information
        </p>
        <p style={{textAlign: "center", fontWeight: "400"}}>
          Copyright © 2022 MH Sub I, LLC dba Internet Brands. The information provided 
          on this site is not legal advice, does not constitute a lawyer referral service, 
          and no attorney-client or confidential relationship is or should be formed by use 
          of the site. The attorney listings on the site are paid attorney advertisements. 
          Your access of/to and use of this site is subject to additional Supplemental Terms
        </p>
    </Container>
  )
}