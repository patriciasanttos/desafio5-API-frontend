import axios from "axios";

const BASE_URL =
  window.location.origin.indexOf("vercel.app") !== -1
    ? "https://desafio-5-nine.vercel.app"
    : "http://localhost:3001";

export class LivrosService {
  static getLivros() {
    return axios.get(BASE_URL + "/livros");
  }

  static getLivro(id) {
    return axios.get(`${BASE_URL}/livros/${id}`);
  }

  static createLivro(body) {
    return axios.post(`${BASE_URL}/livros`, body);
  }

  static updateLivro(id, body) {
    return axios.put(`${BASE_URL}/livros/${id}`, body);
  }

  static deleteLivro(id) {
    return axios.delete(`${BASE_URL}/livros/${id}`);
  }
}
