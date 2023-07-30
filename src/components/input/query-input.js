import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'
import { FlexColumn } from "../../utils";


function inputType(opt) {
  switch (opt) {
    case "query":
      return`
        height: 56px;
        width: 260px;
        text-align: center;
        color: ${colors.blue.regular};
        font-weight: 500;
      `
    default:
      return`
        height: 45px;
        width: 100%;
      `
  }
}

const SingleInput = styled.input`
  border-radius: 6px;
  padding: 4px;
  border: 3px solid ${colors.blue.regular};
  background-color: ${colors.white};
  font-family: ${fonts.primary};
  &:focus {
    outline: none;
    border: 3px solid ${colors.orange.regular};
  }
  ${(props) => inputType(props.opt)};

  ::placeholder {
    color: ${colors.blue.regular};
  }
`

const Label = styled.label`
font-weight: 500;
font-size: 18px;
`

export function QueryInput({id, name, value, placeholder, onChange, label, type, ...props}) {

  const navigate = useNavigate();
  const [ lawyerQuery, setLawyerQuery ] = useState("");
  const [ queryResults, setQueryResults ] = useState([]);

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

  return(
    <FlexColumn style={{gap: "0.6rem"}}>
        <Label htmlFor={id || name}>{label}</Label>
        <input {...props}
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {queryResults ? (
          <div className="input-dropdown">
            {queryResults?.map((result) => {
                return <p 
                  key={result.id}
                  onClick={() => navigate(`lawyers/${result.id}`)}
                  >{result.lawyer_name}</p>
              })}
            {/* <ul 
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
            </ul> */}
          </div>
    ) : null}
    </FlexColumn>
  )
}