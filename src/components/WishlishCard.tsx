import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { IBooks } from '../types/book';
import { addToMybooks } from '../redux/features/mybooks/mybooksSlice';
import toast from 'react-hot-toast';
import { removeFromWishlist } from '../redux/features/wishlist/wishlistSlice';


interface IProps {
    book: IBooks
}

export default function WishlishCard({ book }: IProps) {
    const successMybook = () => toast('Added to mybooks successfully.');

    const dispatch = useAppDispatch();
    const handdleAddToMyBooks = (book: IBooks) => {
        dispatch(addToMybooks(book));
        dispatch(removeFromWishlist(book))
        successMybook();

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
                    <button onClick={() => dispatch(removeFromWishlist(book))} className="btn btn-error btn-wide lg:mx-3 mx-10 my-3">Remove from wishlist</button>
                    <button onClick={() => handdleAddToMyBooks(book)} className="btn btn-accent btn-wide lg:mx-3 mx-10 ">Add to MyBooks</button>

                </div>
            </div>

        </div>)
}
