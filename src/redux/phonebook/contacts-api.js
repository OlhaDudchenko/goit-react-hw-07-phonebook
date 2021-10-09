import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");

  return data;
}

export async function addContacts(config) {
  const { data } = await axios.post("/contacts", config);

  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
}
