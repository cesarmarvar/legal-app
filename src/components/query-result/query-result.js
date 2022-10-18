import styled from "@emotion/styled"

// const Container = styled.div`
  
// `

const Li = styled.li`
height: 56px;
width: 260px;
border: 2px solid black;
`

function QueryResult({result}) {
  return(
      <Li>
        {result.lawyer_name}
      </Li>
    
  )
}

export default QueryResult;