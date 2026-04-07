import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";
import type { BookResponse } from "../types/BookType";

const API_URL = "http://localhost:3000"

const BooksByGenre = async (genre: string, limit?: number): AxiosPromise<BookResponse> => {
    if(limit){
        const response = await axios.get<BookResponse>(API_URL + `/livros/?genero=${genre}&_limit=${limit}`);
        return response;
    }else{
        const response = await axios.get<BookResponse>(API_URL + `/livros/?genero=${genre}`);
        return response;
    }
}

export function useBooksByGenre(genre?:string, limit?: number){
    const query = useQuery({
        queryFn: () => BooksByGenre(genre || '', limit),
        queryKey: ['books', genre]
    })

    return {
        ...query,
        data: query.data?.data
    }
}