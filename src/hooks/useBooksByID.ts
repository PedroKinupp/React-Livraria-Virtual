import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";
import type { BookResponse } from "../types/BookType";

const API_URL = "http://localhost:3000"

const BooksByID = async (id: number): AxiosPromise<BookResponse> => {
    const response = await axios.get<BookResponse>(API_URL + `/livros/?id=${id}`);
    return response;
}

export function useBooksByID(id?:number){
    const query = useQuery({
        queryFn: () => BooksByID(id || 0),
        queryKey: ['books']
    })

    return {
        ...query,
        data: query.data?.data.find(item => item.id === id)
    }
}