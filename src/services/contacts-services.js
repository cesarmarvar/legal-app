import apiFetch from "./api-fetch";

export function createContact(formData){
  return apiFetch('contacts/new', {body: formData});
};

export function getContacts() {
  return apiFetch('contacts');
};

export function showContact(id) {
  return apiFetch(`contacts/${id}`);
};