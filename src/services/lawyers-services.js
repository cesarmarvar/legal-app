import { BASE_URL } from "../config";

export async function getLawyers() {
  const response = await fetch(`${BASE_URL}lawyers`, {
    method: "GET"
  })
  
  const data = response.json();
  return data
}

export async function showLawyer(id) {
  const response = await fetch(`${BASE_URL}lawyers/${id}`, {
    method: "GET"
  });

  const data = response.json();
  return data
}