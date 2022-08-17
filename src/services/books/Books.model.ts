export interface IBook {
  id: string;
  volumeInfo: {
    publisher?: string;
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  }
}

export interface ISearchBooksResponse {
  items: IBook[];
}