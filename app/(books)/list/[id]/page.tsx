import React from "react";
import { Suspense } from "react";
import BookList from "@/app/components/BookList";
import Spinner from "@/app/components/Spinner";
import { getBooks } from "@/app/api";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { results } = await getBooks(id);
  return {
    title: results.list_name,
  };
}

const List = async ({ params }: { params: Promise<{ id: string }> }) => {
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
