import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { removeFromMybooks } from "../redux/features/mybooks/mybooksSlice";
import { IBooks } from "../types/book";
import { Link } from "react-router-dom";
import { useState } from "react";

interface IProps {
    book: IBooks
}

export default function MyBooksCard({ book }: IProps) {
    const dispatch = useAppDispatch();
    const [readingStatus, setReadingStatus] = useState('Pending Reading');
    const { userName } = useAppSelector(state => state.setUser)

    const successMybook = () => toast('Added to mybooks successfully.');

    const handleBtnState = () => {
        if (readingStatus === 'Pending Reading') {
            setReadingStatus('Finished');
        } else {
            setReadingStatus('Pending Reading');
        }
    };

    const handdleRemoveFromMyBooks = (book: IBooks) => {
        if (userName !== '') {
            dispatch(removeFromMybooks(book));
            successMybook();
        }

    }

    return (
        <div className='mx-auto text-black mb-10 rounded-md'>
            <Link to={`/books/${book?._id}`}>
                <img className='rounded-md h-60 mx-auto' src={book?.cover_img} width={180} alt="" />
            </Link>
            <div className='items-baseline mx-auto'>

                <div className='text-center  text-gray-500 px-2 py-2'>
                    <p>Author: {book?.author}</p>
                    <p className=' text-primary font-bold font-serif'>{book?.title}</p>
                    <p>Genre: {book?.genre}</p>
                    <p>Publication Year: {book?.publicationYear}</p>
                </div>
                <div className='items-end'>
                    <div className='items-end'>
                        {readingStatus === 'Pending Reading' ? (
                            <button onClick={handleBtnState} className="btn btn-accent btn-wide lg:mx-3 mx-10 my-3">Pending Reading</button>
                        ) : (
                            <button className="btn btn-success btn-wide lg:mx-3 mx-10 my-3">Finished</button>
                        )}
                    </div>
                    <button onClick={() => handdleRemoveFromMyBooks(book)} className="btn btn-error btn-wide lg:mx-3 mx-10 my-3">Remove from Mybooks</button>

                </div>
            </div>

        </div>)
}
