import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useAddReviewMutation } from '../redux/features/books/bookApi';

interface IFormInput {
    review?: string
}

interface IProps {
    id: string
}

export default function ReviewForm({ id }: IProps) {
    const [addReview] = useAddReviewMutation();

    const reviewSuccess = () => toast('Review added successfully')
    const reviewError = () => toast('Review failed')

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (review) => {
        console.log(review);
        const options = {
            id, review
        }
        const response = await addReview(options);
        if ('data' in response) {
            console.log(response.data);
            if (response.data.success === true) {
                reviewSuccess();
            } else {
                reviewError
            }
        }

    }
    return (
        <div>
            <div className='mx-5'>
                <Toaster />
                <form onSubmit={handleSubmit(onSubmit)} className="card">
                    <div className="text-center">
                        <h1 className="text-md font-bold">Add New review!</h1>
                    </div>
                    <div className="form-control">
                        <input  {...register("review")} type="text" className="input input-bordered" />
                    </div>
                    <button type='submit' className='btn btn-success btn-md'>Submit</button>
                </form>
            </div>
        </div>
    )
}
