import { Link, useNavigate } from "react-router-dom";
import { PiBookFill, PiUser } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { removeFromWishlist } from "../redux/features/wishlist/wishlistSlice";
import { RootState } from "../redux/store";
import { clearPersist } from "../utils/helpers";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { books, total } = useAppSelector((state) => state.wishlist);
  const user = useAppSelector((state: RootState) => state.setUser);
  const navigate = useNavigate();
  console.log(user, "user");

  const handlelogOut = () => {
    localStorage.clear();
    clearPersist();
    navigate("/signin");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/allBooks"}>AllBooks</Link>
            </li>
            <li>
              <Link to={"/mybooks"}>MyBooks</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>WishList</Link>
            </li>
            <li>
              <Link to={"/addNew"}>AddNew</Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost normal-case text-xl">
          Book Catalogue
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/allBooks"}>AllBooks</Link>
          </li>
          <li>
            <Link to={"/mybooks"}>MyBooks</Link>
          </li>
          <li>
            <Link to={"/wishlist"}>WishList</Link>
          </li>
          <li>
            <Link to={"/addNew"}>AddNew</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <span className="text-xl">
                  <PiBookFill />
                </span>
                <span className="badge badge-sm indicator-item">{total}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow"
            >
              <div className="card-body">
                {books?.map((book) => (
                  <div className="flex items-center">
                    <img src={book?.cover_img} width={64} alt="" />
                    <div className="mx-2">
                      <h3 className="text-md font-bold">{book?.title}</h3>
                      <button
                        onClick={() => dispatch(removeFromWishlist(book))}
                        className="btn btn-error btn-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="card-actions">
                  <Link to={"/wishlist"}>
                    <button className="btn btn-primary btn-block">
                      View Wishlist
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-5 rounded-full justify-center">
                <span className="text-xl">
                  <PiUser />
                </span>
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.userName ? (
                <>
                  <h3 className="text-xl font-medium mx-2">{user?.userName}</h3>
                  <li>
                    <span className="justify-between">
                      <Link to={"/mybooks"}>MyBooks</Link>
                    </span>
                    <span className="justify-between">
                      <button onClick={() => handlelogOut()}>Logout</button>
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/signin"}>Signin</Link>
                  </li>
                  <li>
                    <Link to={"/signup"}>Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
