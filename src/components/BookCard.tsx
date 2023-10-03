import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { addToWishlist, removeFromWishlist } from '../redux/features/wishlist/wishlistSlice';
import toast, { Toaster } from 'react-hot-toast';
import { IBooks } from '../types/book';
import { addToMybooks } from '../redux/features/mybooks/mybooksSlice';

type IProps = {
    booksData: IBooks
}

export default function BookCard({ booksData }: IProps) {
    const successWishlist = () => toast('Added to wishlist successfully.')
    const successMybook = () => toast('Added to mybooks successfully.')

    const dispatch = useAppDispatch();
    const handleAddToWishlist = (book: IBooks) => {
        dispatch(addToWishlist(book));
        console.log(book)
        successWishlist();
    }
    const handdleAddToMyBooks = (book: IBooks) => {
        dispatch(addToMybooks(book));
        dispatch(removeFromWishlist(book))
        successMybook();

    }
    return (
        <div className='mx-auto text-black mb-10 rounded-md bg-inherit'>
            <Toaster />
            <Link to={`/books/${booksData._id}`}>
                <img className='rounded-md h-60 mx-auto' src={booksData.cover_img} width={180} alt="" />
            </Link>
            <div className='items-baseline mx-auto'>

                <div className='text-center  text-gray-500 px-2 py-2'>
                    <p>Author: {booksData.author}</p>
                    <p className=' text-primary font-bold font-serif'>{booksData.title}</p>
                    <p>Genre: {booksData.genre}</p>
                    <p>Publication Year: {booksData.publicationYear}</p>
                </div>
                <div className='items-end'>
                    <button onClick={() => handleAddToWishlist(booksData)} className="btn btn-accent btn-wide lg:mx-3 mx-10 my-3 ">Add to wishlist</button>
                    <button onClick={() => handdleAddToMyBooks(booksData)} className="btn btn-secondary btn-wide lg:mx-3 mx-10 ">Add to mybooks</button>

                </div>
            </div>

        </div>
    )
}

