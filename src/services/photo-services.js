import apiFetch from "./api-fetch";

export function uploadPhoto(formData) {
  return apiFetch('photo/new', { method: "POST", body: formData});
}

export function getUserPhoto() {
  return apiFetch('user/photo');
}

export function getLawyerPhoto(id) {
  return apiFetch(`lawyer/photo/${id}`);
}
