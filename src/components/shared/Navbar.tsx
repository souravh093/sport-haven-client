import Container from "./Container";
import logo from "../../assets/volleyball.png";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#18181B] py-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="w-8 h-8 flex items-center text-white gap-1">
            <img className="invert" src={logo} />
            <h1 className="font-black text-2xl">SPORTHAVEN</h1>
          </Link>
          <div className="flex items-center gap-5 uppercase">
            <MenuItem name="All Products" path="/all-products" />
            <MenuItem name="Manage Products" path="/manage-products" />
            <MenuItem name="About Us" path="" />
            <button className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-white hover:text-[#F7E7DC] cursor-pointer transition-all duration-100 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white w-4 h-4 flex justify-center items-center rounded-full">
                2
              </div>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
