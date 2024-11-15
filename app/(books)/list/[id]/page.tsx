import React from "react";
import { Suspense } from "react";
import BookList from "@/app/components/BookList";
import Spinner from "@/app/components/Spinner";

type Params = Promise<{ id: string }>;

const List = async ({ params }: { params: Params }) => {
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
