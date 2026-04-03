import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";
import type { BookResponse } from "../types/BookType";

const API_URL = "http://localhost:3000"

const fetchBooks = async (): AxiosPromise<BookResponse> => {
    const response = await axios.get<BookResponse>(API_URL + '/livros');
    return response;
}

export function useFetchBooks(){
    const query = useQuery({
        queryFn: fetchBooks,
        queryKey: ['book-data']
    })

    return {
        ...query,
        data: query.data?.data
    }
}