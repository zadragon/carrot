import { API_URL } from "../constants";

async function getBooks() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const books = await getBooks();
  console.log(books);

  return (
    <div>
      {books.results.map((item) => {
        return item.list_name;
      })}
    </div>
  );
}
