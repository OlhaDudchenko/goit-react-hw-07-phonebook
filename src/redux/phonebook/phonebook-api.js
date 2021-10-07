import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  // console.log(data)
  return data;
}

export async function postContacts(config) {
  const { data } = await axios.post("/contacts", config);
  // console.log(data)
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  // console.log(data)
  return data;
}
