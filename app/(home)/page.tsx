import { Suspense } from "react";
import Category from "../components/Category";
import Spinner from "../components/Spinner";

export async function generateMetadata() {
  return {
    title: "Home",
  };
}

export default function Home() {
  return (
    <div className="xl:w-[1000px] mx-auto p-10 xl:p-0">
      <Suspense fallback={<Spinner />}>
        <Category />
      </Suspense>
    </div>
  );
}
