import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBooks } from "../types/book";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

export enum GenreEnum {
  Genre = "Genre",
  mystery = "mystery",
  horror = "horror",
  thriller = "thriller",
  romance = "romance",
  sci_fi = "sci-fi",
  fantasy = "fantasy",
  action = "action",
  adventure = "adventure",
  comedy = "comedy",
  drama = "drama",
}

const years = ["1951", "1960", "1988", "1997", "2003", "2008"];

interface IFormInput {
  searchText: string;
  genre: GenreEnum;
  year: string;
}

export default function AllBooks() {
  const [searchText, setSearchText] = useState("");
  const [genre, setGenre] = useState<GenreEnum>();
  const [year, setYear] = useState("");

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { searchText, genre, year } = data;
    setSearchText(searchText);
    if (genre !== "Genre") {
      setGenre(genre);
    }
    setYear(year);
  };
  const options = {
    searchText: searchText,
    genre: genre,
    PublicationYear: year,
  };
  console.log(options, "options");

  console.log(searchText);
  const { data, isSuccess, isError } = useGetBooksQuery({
    searchTerm: searchText,
    genre: genre,
    publicationYear: year,
  });

  const booksData = data?.data;
  console.log(isError, isSuccess, data);

  return (
    <div className="grid lg:grid-cols-12 lg:px-16">
      <div className="col-span-3 lg">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="join">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item"
                    {...register("searchText")}
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="indicator">
                <button className="btn btn-accent join-item">Search</button>
              </div>
            </div>

            <select {...register("genre")} className="select select-bordered">
              <option selected>Genre</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Nonfiction</option>
            </select>

            <div>
              {years.map((year) => (
                <div key={year} className="items-center mx-auto">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      value={year}
                      {...register("year")}
                    />
                    {year}
                  </label>
                </div>
              ))}
            </div>
            <button type="submit" className="btn btn-accent">
              Filter
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto col-span-9 grid lg:grid-cols-3">
        {booksData?.map((book: IBooks) => (
          <BookCard key={book._id} booksData={book} />
        ))}
      </div>
    </div>
  );
}
