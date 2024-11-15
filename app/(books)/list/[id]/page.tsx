import React from "react";
import { Suspense } from "react";
import BookList, { getBooks } from "@/app/components/BookList";
import Spinner from "@/app/components/Spinner";

interface IParams {
  id: string;
}

export async function generateMetadata({ params }: { params: IParams }) {
  const { id } = await params;
  const books = await getBooks(id);
  return {
    title: books.results.list_name,
  };
}

const List = async ({ params }: { params: IParams }) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <BookList id={id} />
      </Suspense>
    </div>
  );
};

export default List;
