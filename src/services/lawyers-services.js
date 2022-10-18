import { BASE_URL } from "../config";
import apiFetch from "./api-fetch";

export async function getLawyers() {
  const response = await fetch(`${BASE_URL}lawyers`, {
    method: "GET"
  })
  
  const data = response.json();
  return data
}

export function showLawyer(id) {
  return apiFetch(`lawyers/${id}`);
}

export function editLawyerProfile(id, formData){
  return apiFetch(`/lawyers/${id}`, { method: "PATCH", body: formData});
}