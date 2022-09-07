import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../components/button/button";
import { getLawyers } from "../services/lawyers-services";
import { colors } from "../styles/colors";
import { DivisionLine, FlexColumn, FlexRow } from "../utils";
import { MdStars } from "react-icons/md";

function printRatingStars(rating) {
  const x = rating
  switch (true){
    case (x === 0):
      return "Unrated";
    case (x <= 1.0):
      return (<>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
              </>
              );
    case (x <= 2.0):
      return (<>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
              </>
              );
    case (x <= 3.0):
      return (<>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
              </>
              );
    case (x <= 4.0):
      return (<>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
              </>
              );
    case (x <= 5.0):
      return (<>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
                <MdStars size="20px" color={`${colors.orange.stars}`}/>
              </>
              );
    default:
      return;
  }
}

export function LawyersPage() {

  const [lawyers, setLawyers] = useState([]);
  
  useEffect(() => {
    getLawyers()
    .then(setLawyers)
    .catch(console.log)
  }, []);

  return(
    <div style={{margin: "2rem"}}>
    <FlexColumn style={{gap: "0px", alignItems: "center", color: `${colors.blue.regular}`}}>
      <h3>Miraflores, Lima</h3>
      <h3>Criminal Defense Lawyers</h3>
    </FlexColumn>
    <FlexRow 
      style={{
        justifyContent: "space-between",
        margin: "10px",
        color: `${colors.blue.regular}`
      }}>
      <h4>Lawyers</h4>
      <p>{lawyers.length} results</p>
    </FlexRow>
    {lawyers.map((lawyer, index) => {
      return(
        <FlexColumn key={index} style={{
          maxHeight: "310px",
          gap: "1rem",
          marginBottom: "1rem"

        }}>
          <DivisionLine />
          <FlexRow style={{
            gap: "2rem"
          }}>
            <div>imagen</div>
            <FlexColumn style={{
              gap: "8px",
              width: "100%"
            }}>
              <h3>{lawyer.name}</h3>
              <p>{lawyer.credentials}</p>
              <FlexRow style={{justifyContent: "space-between"}}>
                <p>licensed for {lawyer.years_licensed} years</p>
                <FlexRow style={{gap: "6px"}}>
                  <FlexRow style={{gap: "2px", alignItems: "center"}}>
                    {printRatingStars(lawyer.average_rating)}
                  </FlexRow>
                  <p>({lawyer.reviews_count})</p>
                </FlexRow>
              </FlexRow>
            </FlexColumn>
          </FlexRow>
          <p>{lawyer.bio}</p>
          <FlexRow style={{
            gap: "1rem",
            justifyContent: "center",
          }}>
            <Button 
              type="secondary" 
              size="medium" 
              style={{
                fontSize: "12px",
                fontWeight: "400"
              }}
            >Call {lawyer.cellphone}</Button>
            <Button 
              type="secondary" 
              size="medium" 
              style={{
                fontSize: "12px", 
                fontWeight: "400"
              }}
            >Message {lawyer.cellphone}</Button>
          </FlexRow>
        </FlexColumn>
      )})}
      <DivisionLine />
      <Button 
      type="ghost" 
      size="wide"
      style={{margin: "0 auto", marginTop: "2rem", marginBottom: "2rem", fontSize: "15px"}}
      >Next page</Button>
      {/* <p>Similar Issues in Lima : DUI Traffic Violations Expungements Parole And Probation Domestic Violence Drivers License Suspension Federal Criminal Defense Juvenile</p> */}
    </div>
  )
}