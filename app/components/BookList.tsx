import React from "react";
import Link from "next/link";
import { API_URL } from "../constants";

interface IParams {
  id: string;
}

interface IResults {
  list_name: string;
  books: Book[];
}

interface Book {
  primary_isbn10: string;
  title: string;
  book_image: string;
  author: string;
  amazon_product_url: string;
}

export const getBooks = async (id: string): Promise<{ results: IResults }> => {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
};

const BookList = async ({ id }: IParams) => {
  const { results } = await getBooks(id);

  return (
    <div>
      <h1 className="text-center pt-10 text-3xl">{results.list_name}</h1>
      <ul className="grid lg:grid-cols-4 p-10 gap-10 xl:w-[1000px] mx-auto gap-x-4 md:grid-cols-3 sm:grid-cols-2 xl:p-0">
        {results.books.map((book) => {
          return (
            <li key={book.primary_isbn10} className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden gap-2 flex flex-col transition-transform transform hover:scale-105 hover:translate-y-1">
              <img src={book.book_image} alt={book.title} />
              <h2 className="text-gray-500">{book.title}</h2>
              <p className="text-blue-500">{book.author}</p>
              <div>
                <Link href={book.amazon_product_url} target="blank" className="border-[1px] border-[#333] p-4 py-2 inline-block rounded-md">
                  Buy now 🔗
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
