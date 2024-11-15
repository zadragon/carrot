import Link from "next/link";
import { API_URL } from "../constants";

interface IItem {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
}
async function getCategoryLists() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function Category() {
  const books = await getCategoryLists();
  console.log(books);

  return (
    <div className="pt-10">
      <ul className="flex flex-row flex-wrap gap-5">
        {books.results.map((book: IItem, index: string) => {
          return (
            <li key={`${index}`}>
              <Link
                href={`/list/${book.list_name_encoded}`}
                className="block border border-gray-600 p-2 px-4 border-r-2 rounded-lg transition-transform transform hover:scale-105 hover:-translate-y-1 focus:border-blue-700"
              >
                {book.list_name} →
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}