/* eslint-disable react-hooks/rules-of-hooks */
import toast, { Toaster } from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoginUserMutation } from '../redux/features/user/userApi';
import { useAppDispatch } from '../redux/hook';
import { setUser } from '../redux/features/user/userSlice';
import { useNavigate } from 'react-router-dom';


interface IFormInput {
    email: string;
    password: string;
}

export default function Signup() {
    const dispatch = useAppDispatch();
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();

    const success = () => toast('User Logged in successfully.');

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (loginData) => {
        try {
            const response = await loginUser(loginData)

            if ('data' in response) {
                success()
                const { data } = response
                const { userName, email, accessToken } = data.data

                // Set access token in local storage
                localStorage.setItem('accessToken', accessToken);
                navigate('/allBooks')

                // Set access token as header for future requests
                const headers = new Headers()
                headers.append('Authorization', `Bearer ${accessToken}`);

                dispatch(setUser({
                    userName: userName, email: email,
                    accessToken: accessToken, isLoading: false
                }));
            }




        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <Toaster />
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>)
}
