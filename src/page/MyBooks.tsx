import MyBooksCard from "../components/MyBooksCard"
import MyBooksFeatured from "../components/MyBooksFeatured"
import { useAppSelector } from "../redux/hook"

export default function MyBooks() {
    const { books } = useAppSelector(state => state.mybooks)

    return (
        <div className='px-16'>
            <MyBooksFeatured />
            <div className='grid grid-cols-4 gap-2 mt-5'>
                {
                    books?.map(book =>
                        <MyBooksCard key={book?._id} book={book} ></MyBooksCard>
                    )
                }
            </div>
        </div>)
}
