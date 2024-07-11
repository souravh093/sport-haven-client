import Container from "./Container";
import logo from "../../assets/volleyball.png";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import Cart from "../modal/Cart";

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
            <MenuItem name="About Us" path="/about-us" />
            <Cart />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
