import { BASE_URL, tokenKey } from "../config";

export async function createUser(formData) {
  const response = await fetch(`${BASE_URL}profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  const data = response.json();
  return data
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}profile`, {
    method: "GET",
    headers: {
      "Authorization": `Token token=${tokenKey}`
    },
  })

  const data = response.json();
  return data
}