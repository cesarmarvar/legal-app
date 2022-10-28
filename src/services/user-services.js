import apiFetch from "./api-fetch";

export function createUser(credentials){
  return apiFetch('profile', { body: credentials });
}

export function getUser() {
  return apiFetch("profile").then((u) => {
    const { token, ...user } = u;
    return user;
  });
}

export function getUsersLawyer() {
  return apiFetch("my-lawyer-profile");
}

export function editUser(formData) {
  return apiFetch("profile/edit", { body: formData, method: "PATCH" })
}