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
    <footer className="bg-black py-12 md:px-0 px-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex">
            <Link to={"/"} className="flex items-center gap-2 text-gray-200">
              <img src={logo} alt="footer logo" className="invert w-8" />
              <h1 className="font-black text-2xl">SPORTHAVEN</h1>
            </Link>
          </div>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link to={"/"} className="text-muted-foreground hover:underline">
              Home
            </Link>
            <Link
              to={"/all-products"}
              className="text-muted-foreground hover:underline"
            >
              All Product
            </Link>
            <Link
              to={"/about-us"}
              className="text-muted-foreground hover:underline"
            >
              About Us
            </Link>
          </nav>
          <div className="flex items-center justify-end gap-4">
            <Link
              to={"https://www.facebook.com/profile.php?id=100012269386584"}
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
            <Link to={"https://x.com/souravehalder1"} aria-label="Twitter">
              <TwitterIcon className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
            <Link
              to={"https://www.instagram.com/souravbd093/"}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 text-muted-foreground hover:text-primary-foreground" />
            </Link>
            <Link
              to={"https://www.youtube.com/@souravehalder9965"}
              aria-label="YouTube"
            >
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
