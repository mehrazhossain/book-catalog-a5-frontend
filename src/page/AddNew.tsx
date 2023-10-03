import { SubmitHandler, useForm } from "react-hook-form"
import { useAddNewBookMutation } from "../redux/features/books/bookApi"
import toast, { Toaster } from "react-hot-toast"
import { useAppSelector } from "../redux/hook"

interface IFormInput {
    title: string,
    author: string,
    publicationYear: string,
    genre: string
    cover_img: string
    admin: string

}
export default function AddNew() {

    const [addNewBook] = useAddNewBookMutation();
    const { userName } = useAppSelector(state => state.setUser)

    const success = () => toast('Book added successfully');
    const error = () => toast('Could not add book ');

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (bookData) => {
        const response = await addNewBook(bookData)
        if ('data' in response) {
            console.log(response.data)

            success()
        }
        else {
            error()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Add New Book!</h1>
                </div>
                <Toaster />
                <div className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input  {...register("title")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author</span>
                        </label>
                        <input  {...register("author")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Published on</span>
                        </label>
                        <input  {...register("publicationYear")} type="text" className="input input-bordered" />
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">cover_img</span>
                        </label>
                        <input  {...register("cover_img")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Admin</span>
                        </label>
                        <input  {...register("admin")} value={userName} type="text" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit </button>
                    </div>
                </div>
            </form>
        </div>
    )
}