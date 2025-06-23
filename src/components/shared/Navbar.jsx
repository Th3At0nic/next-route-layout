import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-2l font-bold">
        <Link
          href="/"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          MyApp
        </Link>
      </div>
      <div className="flex gap-6">
        <Link
          href="/"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Dashboard
        </Link>
        <Link
          href="/profile"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Profile
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Contact
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
