import apiFetch from "./api-fetch";

export function createContact(formData){
  return apiFetch('contacts/new', {body: formData});
};
