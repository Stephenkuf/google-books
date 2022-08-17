import { AxiosResponse } from 'axios'
import { http } from "plugins/http.client";
import { ISearchBooksResponse } from './Books.model';


const baseServicePath: string = '/volumes';

class BooksService {
	searchBooks(params: {q: string}): Promise<ISearchBooksResponse> {
		return http.get<AxiosResponse, ISearchBooksResponse>(baseServicePath, { params });
	}
}

export const booksService = new BooksService()