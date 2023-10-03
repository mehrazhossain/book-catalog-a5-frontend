import { useAppSelector } from '../redux/hook'
import WishlishCard from '../components/WishlishCard'
import WishlistFeatured from '../components/WishlistFeatured'

export default function WishList() {
    const { books } = useAppSelector(state => state.wishlist)

    return (
        <div className='px-16'>
            <WishlistFeatured></WishlistFeatured>
            <div className='grid grid-cols-4 gap-2 mt-5'>
                {
                    books?.map(book =>
                        <WishlishCard key={book?._id} book={book} ></WishlishCard>
                    )
                }
            </div>
        </div>
    )
}
