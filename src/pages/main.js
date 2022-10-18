import styled from "@emotion/styled";
import { colors } from '../styles/colors';
import { Input } from '../components/input/input'
import { FlexColumn } from "../utils";
import { Button } from '../components/button/button';
import { PracticeCard } from "../components/practice-card/practice-card";
import { MdFamilyRestroom, MdHouse } from 'react-icons/md';
import { BsBriefcaseFill } from 'react-icons/bs';
import { Disclaimer } from "../components/disclaimer/disclaimer";
import { AskALawyer } from "../components/ask-lawyer/ask-a-lawyer";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";



const Li = styled.li`
  height: 30px;
  width: 260px;
  padding-left: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray.regular};
  }
`

const H3 = styled.h3`
  color: ${colors.blue.regular};
  margin-top: 35px;
  margin-bottom: 30px;
`

function MainPage() {

  const navigate = useNavigate();
  const [lawyerQuery, setLawyerQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  const [locationQuery, setLocationQuery] = useState("");


  function handleQueryClick(e) {
    e.preventDefault();
    navigate('/lawyers')
  }

  useEffect(() => {
    setQueryResults([]);
    const fetchResults = async () => {
      if (!lawyerQuery) {
        return;
      }
      const response = await fetch(`https://legalapp-0822.herokuapp.com/lawyers-searchquery?query=${lawyerQuery}`);
      const data = await response.json();
      setQueryResults(data)
    }
    fetchResults();
  }, [lawyerQuery])

  return (
    <FlexColumn style={{ alignItems: "center" }}>
      <H3>Encuentra a tu representante</H3>
      <form>
        <FlexColumn style={{ gap: "20px" }}>
          <FlexColumn>
            <Input
              placeholder="Legal issue or Lawyer name"
              opt="query"
              value={lawyerQuery}
              onChange={e => setLawyerQuery(e.target.value)}
            />
            {queryResults ? (
              <div>
                <ul
                  style={{
                    position: "absolute",
                    border: "1px solid black",
                    backgroundColor: "white"
                  }}
                >
                  {queryResults?.map((result) => {
                    return <Li
                      key={result.id}
                      onClick={() => navigate(`lawyers/${result.id}`)}
                    >{result.lawyer_name}</Li>
                  })}
                </ul>
              </div>
            ) : null}
          </FlexColumn>
          <Input
            placeholder="Location"
            opt="query"
            value={locationQuery}
            onChange={e => setLocationQuery(e.target.value)}
          />
          <Button onClick={handleQueryClick} size="tall" type="primary">get started</Button>
        </FlexColumn>
      </form>
      <H3>Busca por práctica</H3>
      <FlexColumn style={{ gap: "3.5rem" }}>
        <PracticeCard
          lawType="Family"
          practices={["Divorce", "Child Custody", "Child Support"]}
          icon={<MdFamilyRestroom
            style={{ position: "absolute", top: "-20px" }}
            size="40px" color={`${colors.blue.regular}`}
          />}
        />
        <PracticeCard
          lawType="Employment"
          practices={["Discrimination", "Compensation", "Termination"]}
          icon={<BsBriefcaseFill
            style={{ position: "absolute", top: "-20px" }}
            size="40px" color={`${colors.blue.regular}`}
          />}
        />
        <PracticeCard
          lawType="Real estate"
          practices={["Landlord", "Tenant", "Eviction"]}
          icon={<MdHouse
            style={{ position: "absolute", top: "-20px" }}
            size="40px" color={`${colors.blue.regular}`}
          />}
        />
      </FlexColumn>
      <Button
        style={{ marginTop: "30px", marginBottom: "30px" }}
        type="secondary"
        size="wide"
      >
        view all Legal Fields
      </Button>
      <H3>Ask a Lawyer</H3>
      <AskALawyer style={{ marginBottom: "1rem" }} />
      <Disclaimer />
    </FlexColumn>
  )
}

export default MainPage;