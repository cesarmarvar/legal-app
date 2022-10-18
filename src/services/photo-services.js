import apiFetch from "./api-fetch";

export function uploadPhoto(formData) {
  return apiFetch('photo/new', { method: "POST", body: formData});
}

export function getUserPhoto() {
  return apiFetch('lawyer/photo');
}