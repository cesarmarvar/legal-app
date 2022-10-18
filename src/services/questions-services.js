import { BASE_URL } from "../config";
import apiFetch from "../services/api-fetch";

export async function getQuestions() {
  const response = await fetch(`${BASE_URL}questions`, {
    method: "GET"
  })
  const data = response.json();
  return data
}

export async function showQuestion(id) {
  const response = await fetch(`${BASE_URL}question/${id}`, {
    method: "GET"
  })
  const data = response.json();
  return data
}

export function createQuestion(formData) {
  return apiFetch('questions/new', {body: formData});
}

export function getQuestionAnswers(id) {
  return apiFetch(`question/answers/${id}`);
}