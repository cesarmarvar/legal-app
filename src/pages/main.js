import styled from "@emotion/styled";
import { colors } from '../styles/colors';
import { Input } from '../components/input/input'
import { FlexColumn, FlexRow, ThumbnailPic } from "../utils";
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
      const response = await fetch(`https://legalapp-0822.onrender.com/lawyers-searchquery?query=${lawyerQuery}`);
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
              placeholder="Búsqueda por nombre"
              opt="query"
              value={lawyerQuery}
              onChange={e => setLawyerQuery(e.target.value)}
            />
            {queryResults.length > 0 ? (
              <div>
                <ul
                  style={{
                    position: "absolute",
                    border: `1px solid ${colors.orange.regular}`,
                    backgroundColor: "white"
                  }}
                >
                  {queryResults?.map((result) => {
                    return <Li
                      key={result.id}
                      onClick={() => navigate(`lawyers/${result.id}`)}
                    >
                      <FlexRow style={{justifyContent: "space-between"}}>
                        <p>{result.lawyer_name}</p>
                        <ThumbnailPic src={result.image} />
                      </FlexRow>
                    </Li>
                  })}
                </ul>
              </div>
            ) : null}
          </FlexColumn>
          <Input
            placeholder="Búsqueda por ubicación"
            opt="query"
            value={locationQuery}
            onChange={e => setLocationQuery(e.target.value)}
          />
          <Button onClick={handleQueryClick} size="tall" type="primary">Buscar</Button>
        </FlexColumn>
      </form>
      <H3>Busca por práctica</H3>
      <FlexColumn style={{ gap: "3.5rem" }}>
        <PracticeCard
          lawType="Familia"
          practices={["Divorcio", "Custodia", "Alimentos"]}
          icon={<MdFamilyRestroom
            style={{ position: "absolute", top: "-20px" }}
            size="40px" color={`${colors.blue.regular}`}
          />}
        />
        <PracticeCard
          lawType="Laboral"
          practices={["Despidos", "Compensaciones", "Discriminación"]}
          icon={<BsBriefcaseFill
            style={{ position: "absolute", top: "-20px" }}
            size="40px" color={`${colors.blue.regular}`}
          />}
        />
        <PracticeCard
          lawType="Inmobiliario"
          practices={["Compraventa", "Alquiler", "Desalojo"]}
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
        Ver todas las materias
      </Button>
      <H3>Pregunta a un abogado</H3>
      <AskALawyer style={{ marginBottom: "1rem" }} />
      <Disclaimer />
    </FlexColumn>
  )
}

export default MainPage;