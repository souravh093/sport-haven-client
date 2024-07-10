import {
  FacebookIcon,
  InstagramIcon,
  MountainIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <Link to={"#"} className="flex items-center gap-2">
              <MountainIcon className="w-8 h-8" />
              <span className="text-xl font-bold">Sportify</span>
            </Link>
          </div>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link to={"#"} className="text-muted-foreground hover:underline">
              Home
            </Link>
            <Link to={"#"} className="text-muted-foreground hover:underline">
              Shop
            </Link>
            <Link to={"#"} className="text-muted-foreground hover:underline">
              About
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
          &copy; 2024 Sportify. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
