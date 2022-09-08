const BASE_URL = "https://legalapp-0822.herokuapp.com/"

export async function getLawyerReviews(id) {
  const response = await fetch(`${BASE_URL}reviews/lawyer/${id}`, {
    method: "GET"
  });
  const data = response.json();
  return data;
}