import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";
import companyImage from "../../assets/company.jpg";
import contact from "../../assets/contact.jpg";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import shop1 from "../../assets/shop1.jpg";
import shop2 from "../../assets/shop2.jpg";
import shop3 from "../../assets/shop3.jpg";
import shop4 from "../../assets/shop4.jpg";
const About = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-900 text-gray-100">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Sport Haven
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Sport Haven is a leading provider of high-quality sports
                  equipment and apparel. Founded in 1985, we have a rich history
                  of delivering innovative products and exceptional customer
                  service to athletes and sports enthusiasts worldwide.
                </p>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our company is built on a foundation of passion, integrity,
                  and a commitment to excellence. We strive to empower our
                  customers to achieve their athletic goals by offering
                  cutting-edge gear and accessories that are designed to enhance
                  their performance and comfort.
                </p>
              </div>
              <div>
                <img
                  src={companyImage}
                  width={600}
                  height={400}
                  alt="Acme Sports"
                  className="mx-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  At Sport Haven, our mission is to inspire and empower athletes
                  of all levels to reach their full potential. We are committed
                  to providing the highest-quality sports equipment and apparel
                  that not only enhances performance but also promotes a
                  healthy, active lifestyle.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Vision
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our vision is to be the global leader in the sports goods
                  industry, recognized for our innovative products, unparalleled
                  customer service, and unwavering dedication to the well-being
                  of our customers and the communities we serve. We strive to
                  continuously push the boundaries of what's possible in the
                  world of sports and fitness.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  We'd love to hear from you! Feel free to reach out to us with
                  any questions, feedback, or inquiries.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-6 w-6 text-muted-foreground" />
                    <a
                      href="#"
                      className="text-muted-foreground hover:underline"
                    >
                      +88 013 076 289 55
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-6 w-6 text-muted-foreground" />
                    <a
                      href="#"
                      className="text-muted-foreground hover:underline"
                    >
                      souravehalder925@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-6 w-6 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      123 Main Street, Barishal Bangladesh
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="h-6 w-6 text-muted-foreground" />
                    <div className="space-x-2">
                      <Link
                        to={
                          "https://www.facebook.com/profile.php?id=100012269386584"
                        }
                        className="text-muted-foreground hover:underline"
                      >
                        Facebook
                      </Link>
                      <Link
                        to={"https://x.com/souravehalder1"}
                        className="text-muted-foreground hover:underline"
                      >
                        Twitter
                      </Link>
                      <Link
                        to={"https://www.instagram.com/souravbd093/"}
                        className="text-muted-foreground hover:underline"
                      >
                        Instagram
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={contact}
                  width={600}
                  height={400}
                  alt="Contact Us"
                  className="mx-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Our dedicated team of sports enthusiasts and industry experts are
              the driving force behind Sport Haven. Get to know the individuals
              who are committed to delivering the best products and services to
              our customers.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage
                    className="h-[215px] object-cover"
                    height={400}
                    width={400}
                    src={avatar1}
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-medium">Sourave Halder</h3>
                  <p className="text-muted-foreground">CEO</p>
                  <p className="text-sm text-muted-foreground">
                    John is the visionary behind Acme Sports, leading the
                    company with his passion for sports and unwavering
                    commitment to excellence.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage
                    height={400}
                    width={400}
                    className="h-[215px] object-cover"
                    src={avatar2}
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-medium">Jane Smith</h3>
                  <p className="text-muted-foreground">COO</p>
                  <p className="text-sm text-muted-foreground">
                    Jane oversees the day-to-day operations of Acme Sports,
                    ensuring seamless execution and exceptional customer
                    service.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage
                    height={400}
                    width={400}
                    className="h-[215px] object-cover"
                    src={avatar3}
                  />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-medium">Michael Johnson</h3>
                  <p className="text-muted-foreground">Head of Product</p>
                  <p className="text-sm text-muted-foreground">
                    Michael leads the product development team, driving
                    innovation and ensuring our products meet the highest
                    standards of quality and performance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage
                    height={400}
                    width={400}
                    className="h-[215px] object-cover"
                    src={avatar4}
                  />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-medium">Emily Davis</h3>
                  <p className="text-muted-foreground">Head of Marketing</p>
                  <p className="text-sm text-muted-foreground">
                    Emily leads our marketing efforts, ensuring that our brand
                    and products are effectively communicated to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Store Locations
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Visit one of our conveniently located stores to browse our
              selection of top-quality sports equipment and apparel.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={shop1}
                  height={400}
                  width={400}
                  className="h-[215px] object-cover"
                  alt="Store Location 1"
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">Store Location 1</h3>
                  <p className="text-muted-foreground">
                    123 Main Street, Barishal Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={shop2}
                  height={400}
                  width={400}
                  className="h-[215px] object-cover"
                  alt="Store Location 2"
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">Store Location 2</h3>
                  <p className="text-muted-foreground">
                    456 Oak Avenue, Another City
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={shop3}
                  height={400}
                  width={400}
                  className="h-[215px] object-cover"
                  alt="Store Location 3"
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">Store Location 3</h3>
                  <p className="text-muted-foreground">
                    789 Elm Street, Another Town
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={shop4}
                  height={400}
                  width={400}
                  className="h-[215px] object-cover"
                  alt="Store Location 4"
                />
                <div className="text-center">
                  <h3 className="text-lg font-medium">Store Location 4</h3>
                  <p className="text-muted-foreground">
                    101 Pine Street, Another City
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
