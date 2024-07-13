import Container from "./Container";
import logo from "../../assets/volleyball.png";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import Cart from "../modal/Cart";
import { useState } from "react";
import { AlignJustify } from "lucide-react";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-[#18181B] py-4 md:px-0 px-5">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="w-8 h-8 flex items-center text-white gap-1">
            <img className="invert" src={logo} alt="Logo" />
            <h1 className="font-black text-2xl">SPORTHAVEN</h1>
          </Link>
          <div className="hidden md:flex items-center gap-5 uppercase">
            <MenuItem name="All Products" path="/all-products" />
            <MenuItem name="Manage Products" path="/manage-products" />
            <MenuItem name="About Us" path="/about-us" />
            <Cart />
          </div>
          <div
            className="md:hidden flex items-center"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <AlignJustify className="text-white hover:text-red-500 cursor-pointer transition duration-300" />
          </div>
        </div>
        {toggleMenu && (
          <div className="md:hidden text-xl">
            <div className="flex flex-col items-center gap-3 mt-3">
              <MenuItem name="All Products" path="/all-products" />
              <MenuItem name="Manage Products" path="/manage-products" />
              <MenuItem name="About Us" path="/about-us" />
              <Cart />
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
