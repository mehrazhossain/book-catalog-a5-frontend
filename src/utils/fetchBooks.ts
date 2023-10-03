import axios from "axios";
import { GenreEnum } from "../page/AllBooks";

const fetchBooks = async (
  searchText: string,
  genre: GenreEnum | undefined,
  publicationYear: string
) => {
  try {
    if (searchText !== "" && genre !== "Genre" && publicationYear !== "") {
      const response = await axios.get(
        `https://book-catalog-a5-backend-gb6w6c6jh-mehraz.vercel.app/api/v1/books/?searchText=${searchText}&genre=${genre}&publicationYear=${publicationYear}`
      );
      const data = response.data;
      return data;
    } else if (searchText !== "" && publicationYear !== "") {
      const response = await axios.get(
        `https://book-catalog-a5-backend-gb6w6c6jh-mehraz.vercel.app/api/v1/books/?searchText=${searchText}&publicationYear=${publicationYear}`
      );
      const data = response.data;
      return data;
    } else if (searchText !== "" && genre !== "Genre") {
      const response = await axios.get(
        `https://book-catalog-a5-backend-gb6w6c6jh-mehraz.vercel.app/api/v1/books/?searchText=${searchText}&genre=${genre}`
      );
      const data = response.data;
      return data;
    } else if (searchText !== "") {
      const response = await axios.get(
        `https://book-catalog-a5-backend-gb6w6c6jh-mehraz.vercel.app/api/v1/books/?searchText=${searchText}`
      );
      const data = response.data;
      return data;
    }
  } catch (error) {
    // Handle the error
    console.error(error);
    // Throw the error or return an error message if needed
    throw error;
  }
};

export default fetchBooks;
