const BASE_URL = "https://legalapp-0822.herokuapp.com/"

export async function createQuestion(formData) {
  const response = await fetch(`${BASE_URL}questions/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token token=toy8MGKCTQTsoqW2eGWs1Z5u"
    },
    body: JSON.stringify(formData)
  })
  const data = response.json();
  return data
}