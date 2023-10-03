import Hero from "../components/Hero";
import { useGetBookQuery } from "../redux/features/books/bookApi";
import { IBooks } from "../types/book";
import BookCard from "../components/BookCard";

export default function Home() {
  const { data } = useGetBookQuery(undefined);
  const booksData = data?.data.slice(0, 10);
  return (
    <>
      <Hero />
      <div className="mx-auto col-span-9 grid lg:grid-cols-4 lg:px-16">
        {booksData?.map((book: IBooks) => (
          <BookCard key={book._id} booksData={book} />
        ))}
      </div>
    </>
  );
}
