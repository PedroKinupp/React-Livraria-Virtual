import axios from "axios"
import type { BookType } from "../types/BookType"

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const BookService = {

  async getByID(id: number): Promise<BookType> {
    const response = await api.get<BookType>(`/livros/${id}`)
    return response.data
  },

  async getByGenre(genero: string, titulo: string): Promise<BookType[]> {
    const response = await api.get<BookType[]>("/livros", {
      params: { 
        genero,
        titulo_like : titulo
      }
    })
    return response.data
  }

}