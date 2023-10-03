import bg from "../assets/pexels-min-an-694740.jpg";

export default function WishlistFeatured() {
  return (
    <div className="hero lg:px-16" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">My Wishlist</h1>
        </div>
      </div>
    </div>
  );
}
