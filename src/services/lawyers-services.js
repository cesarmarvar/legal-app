const BASE_URL = "https://legalapp-0822.herokuapp.com/"

export async function getLawyers() {
  const response = await fetch(`${BASE_URL}lawyers`, {
    method: "GET"
  })
  
  const data = response.json();
  return data
}