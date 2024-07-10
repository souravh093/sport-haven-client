import Container from "@/components/shared/Container";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-950 border-b border-gray-800 text-gray-400 py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <div className="flex flex-col items-center">
              <div className="mb-6 inline-block rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                Get in Touch
              </div>
              <h2 className="mb-4 uppercase text-3xl max-w-2xl text-center font-bold tracking-tight md:text-4xl lg:text-5xl">
                Connect with Our Sports Experts
              </h2>
              <p className="mb-8 max-w-xl text-muted-foreground md:text-lg text-center">
                Have a question about our products or need help with an order?
                Our friendly team is here to assist you.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="mb-4 flex items-center">
                  <FaPhone className="mr-3 h-6 w-6 text-gray-500" />
                  <h3 className="text-lg font-bold">Phone</h3>
                </div>
                <p>+88 01307628955</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="mb-4 flex items-center">
                  <MdEmail className="mr-3 h-6 w-6 text-gray-500" />
                  <h3>Email</h3>
                </div>
                <h3>souravehalder925@gmail.com</h3>
              </div>
              <div className="rounded-lg bg-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="mb-4 flex items-center">
                  <IoShareSocial className="mr-3 h-6 w-6 text-gray-500" />
                  <h3>Phone</h3>
                </div>
                <div className="flex">
                  <Link to="/">
                    <FaFacebookSquare className="mr-3 h-6 w-6 text-gray-500" />
                  </Link>
                  <Link to="/">
                    <FaInstagramSquare className="mr-3 h-6 w-6 text-gray-500" />
                  </Link>
                  <Link to="/">
                    <FaTwitter className="mr-3 h-6 w-6 text-gray-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div>
            <div className="rounded-lg border border-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
              <form>
                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={15}
                    placeholder="Enter your message"
                    className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
