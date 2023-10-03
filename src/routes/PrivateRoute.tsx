
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

interface IProps {
    children: ReactNode
}

export default function PrivateRoute({ children }: IProps) {
    const { userName, isLoading } = useAppSelector((state) => state.setUser);
    const pathName = useLocation();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (!userName && !isLoading) {
        return <Navigate to={'/signin'} state={{ path: pathName }}></Navigate>
    }
    return children;
}
