import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FlexColumn, FlexRow } from '../../utils';

function Footer() {

  return(
    <FlexColumn style={{justifyContent: "center", alignItems: 'center', gap: "0.5rem", width: "100%", padding: "0.5rem"}}>
      <FlexRow style={{gap: "1rem"}}>
      {/* eslint-disable-next-line */}
        <a href="#">
          <BsFacebook size="25px" color="#5590B0"/>
        </a>
        {/* eslint-disable-next-line */}
        <a href="#">
          <BsTwitter size="25px" color="000000"/>
        </a>
      </FlexRow>
      <p>
      © Legal Inc. All Rights Reserved 2023
      </p>
    </FlexColumn>
  )
}

export default Footer;