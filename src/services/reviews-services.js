const BASE_URL = "https://legalapp-0822.herokuapp.com/"

export async function getLawyerReviews(id) {
  const response = await fetch(`${BASE_URL}reviews/lawyer/${id}`, {
    method: "GET"
  });
  const data = response.json();
  return data;
}

export async function createReview(formData) {
  const response = await fetch(`${BASE_URL}reviews/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  });
  const data = response.json();
  return data
}