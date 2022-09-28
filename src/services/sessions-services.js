const BASE_URL = "https://legalapp-0822.herokuapp.com/"

export async function login(formData) {
  const response = await fetch(`${BASE_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const data = response.json();
  return data;
}