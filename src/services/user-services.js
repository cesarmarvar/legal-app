import { BASE_URL } from "../config";
import apiFetch from "./api-fetch";


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

export function getUser() {
  return apiFetch("profile").then((u) => {
    const { token, ...user } = u;
    // sessionStorage.setItem(tokenKey, token);
    return user;
  });
}