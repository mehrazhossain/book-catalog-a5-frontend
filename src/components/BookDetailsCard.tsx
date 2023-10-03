import toast, { Toaster } from 'react-hot-toast'
import { addToWishlist } from '../redux/features/wishlist/wishlistSlice'
import { useAppDispatch } from '../redux/hook'
import { IBooks } from '../types/book'
import { Link } from 'react-router-dom'
import { useDeleteBookMutation } from '../redux/features/books/bookApi'
import ReviewForm from './ReviewForm';

type IProps = {
    book: IBooks
}


export default function BookDetailsCard({ book }: IProps) {
    const [deleteBook] = useDeleteBookMutation();
    const wishListSuccess = () => toast('Added to wishlist successfully.')
    const deleteSuccess = () => toast('Deleted book successfully.')
    const deleteError = () => toast('Book couldnt be deleted .')
    const reviews = (book?.reviews)
    const dispatch = useAppDispatch();

    const handleAddToWishlist = (book: IBooks) => {
        dispatch(addToWishlist(book));
        wishListSuccess();
    }
    const handleDeleteBook = async (id: string) => {
        const response = await deleteBook(id);
        if ('data' in response) {
            console.log(response.data);
            if (response.data.success === true) {
                deleteSuccess();
            } else {
                deleteError()
            }
        }
    }



    return (
        <div className='lg:flex md:flex justify-between lg:mx-24 mt-5 mb-5 rounded-md'>
            <Toaster />
            <img className='h-80 mx-auto ' src={book?.cover_img} alt="" />
            <div className='mx-5'>
                <h2 className='text-2xl font-bold text-left'>{book?.title}</h2>

                <div className='flex items-center justify-start mx-1 mt-3  font-medium' >
                    <p>Written by:<em> {book?.author}</em></p>
                </div>
                <div className='text-left mt-4'>
                    <p><span className='font-bold'>Genre:</span> {book?.genre}</p>
                    <p><span className='font-bold'>Published on:</span> {book?.publicationYear}</p>
                    <p className='text-left'><span className='font-bold'>Description:</span>
                        <em>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis ante ut pharetra finibus.
                            Pellentesque sollicitudin elit in risus varius, sed euismod felis dignissim. Vivamus ultrices diam eget augue tristique,
                            id ullamcorper metus lacinia. Sed at bibendum nunc, vitae dapibus purus."
                        </em>
                    </p>
                    <div>
                        <h3 className='font-bold'>Reviews:</h3>
                        {
                            reviews?.map((review, index) => {
                                return (
                                    <div key={index} className=' justify-start mx-1 mt-3'>
                                        <em>"{review}"</em>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='my-5 mx-2 '>
                    <button onClick={() => handleAddToWishlist(book)} className="btn btn-accent">Add to wishlist</button>
                    <Link to={`/editbook/${book?._id}`}><button className="btn btn-primary">Edit Book</button></Link>

                    {/* The button to open modal */}
                    <a href="#my_modal_8" className="btn btn-error">Delete</a>
                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal_8">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{book?.title}</h3>
                            <p className="py-4">Do you want to delete {book?.title}</p>
                            <div className="modal-action">
                                <a href="#" onClick={() => handleDeleteBook(book?._id)} className="btn btn-error">Yes Delete</a>
                            </div>
                        </div>
                    </div>

                </div>
                <ReviewForm id={book?.id} />
            </div>

        </div>
    )
}
