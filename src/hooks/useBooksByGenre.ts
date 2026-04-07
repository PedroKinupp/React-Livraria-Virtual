import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";
import type { BookResponse } from "../types/BookType";

const API_URL = "http://localhost:3000"

const BooksByGenre = async (genre: string): AxiosPromise<BookResponse> => {
    const response = await axios.get<BookResponse>(API_URL + `/livros/?genero=${genre}`);
    return response;
}

export function useBooksByGenre(genre?:string){
    const query = useQuery({
        queryFn: () => BooksByGenre(genre || ''),
        queryKey: ['books']
    })

    return {
        ...query,
        data: query.data?.data
    }
}