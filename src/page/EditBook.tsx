import { useParams } from 'react-router-dom'
import { useEditBookMutation, useGetSingleBookQuery } from '../redux/features/books/bookApi'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

interface IFormInput {
    title: string,
    author: string,
    publicationYear: string,
    genre: string

}
export default function EditBook() {
    const { id } = useParams();
    const { data } = useGetSingleBookQuery(id)
    const img = data?.data.cover_img;
    const [editBook] = useEditBookMutation();
    const success = () => toast('Book updated successfully')

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
        const options = { id: id, updatedData: data }
        const response = await editBook(options)
        if ('data' in response) {
            console.log(response)
            success()
        }

    }




    return (
        <div className='px-5 lg:flex mx-auto'>
            <div className="text-center">
                <img src={img} width={300} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input    {...register("title")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author</span>
                        </label>
                        <input   {...register("author")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Published on</span>
                        </label>
                        <input type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select  {...register("genre")} className="input input-bordered" >
                            <option disabled defaultValue={"Genre"}>Genre</option>
                            <option value="mystery">Mystery</option>
                            <option value="horror">Horror</option>
                            <option value="thriller">Thriller</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Science Fiction</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
