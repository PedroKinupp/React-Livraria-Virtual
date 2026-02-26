import axios from "axios"
import type { BookType } from "../types/BookType"

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const BookService = {

  async getByID(id: number): Promise<BookType[]> {
    const response = await api.get<BookType>(`/livros/${id}`)
    return [response.data]
  },

  async getByGenre(genero: string): Promise<BookType[]> {
    const response = await api.get<BookType[]>("/livros", {
      params: { genero }
    })
    return response.data
  }

}