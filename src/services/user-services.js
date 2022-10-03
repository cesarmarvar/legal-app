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