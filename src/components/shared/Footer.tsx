import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/volleyball.png";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex">
            <Link to={"#"} className="flex items-center gap-2 text-gray-200">
              <img src={logo} alt="footer logo" className="invert w-8"  />
              <h1 className="font-black text-2xl">SPORTHAVEN</h1>
            </Link>
          </div>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link to={"#"} className="text-muted-foreground hover:underline">
              Home
            </Link>
            <Link to={"#"} className="text-muted-foreground hover:underline">
              All Product
            </Link>
            <Link to={"#"} className="text-muted-foreground hover:underline">
              About Us
            </Link>
            <Link to={"#"} className="text-muted-foreground hover:underline">
              Contact
            </Link>
            <Link to={"#"} className="text-muted-foreground hover:underline">
              FAQ
            </Link>
            <Link to={"#"} className="text-muted-foreground hover:underline">
              Returns
            </Link>
          </nav>
          <div className="flex items-center justify-end gap-4">
            <Link to={"#"} aria-label="Facebook">
              <FacebookIcon className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
            <Link to={"#"} aria-label="Twitter">
              <TwitterIcon className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
            <Link to={"#"} aria-label="Instagram">
              <InstagramIcon className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
            <Link to={"#"} aria-label="YouTube">
              <YoutubeIcon className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 text-center text-xs text-muted-foreground">
          &copy; 2024 SPORTHAVEN. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
