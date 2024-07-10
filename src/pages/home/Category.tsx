import Container from "@/components/shared/Container";
import { ShoppingBasketIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="bg-gray-900 pt-16 py-24">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 pb-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl text-gray-400 font-bold tracking-tight sm:text-4xl uppercase">
              Explore Our Sports Categories
            </h2>
            <p className="text-muted-foreground text-center">
              Find the perfect gear for your favorite sports and activities.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <Link
            to={"#"}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-gray-400 transition-all group-hover:bg-gray-700 group-hover:text-gray-200">
              <ShoppingBasketIcon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">Basketball</h3>
          </Link>
          <Link
            to={"#"}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-gray-400 transition-all group-hover:bg-gray-700 group-hover:text-gray-200">
              <ShoppingBasketIcon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">Basketball</h3>
          </Link>
          <Link
            to={"#"}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-gray-400 transition-all group-hover:bg-gray-700 group-hover:text-gray-200">
              <ShoppingBasketIcon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">Basketball</h3>
          </Link>
          <Link
            to={"#"}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-gray-400 transition-all group-hover:bg-gray-700 group-hover:text-gray-200">
              <ShoppingBasketIcon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">Basketball</h3>
          </Link>
          <Link
            to={"#"}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-gray-400 transition-all group-hover:bg-gray-700 group-hover:text-gray-200">
              <ShoppingBasketIcon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">Basketball</h3>
          </Link>
          <Link
            to={"#"}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-6 transition-all hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-gray-400 transition-all group-hover:bg-gray-700 group-hover:text-gray-200">
              <ShoppingBasketIcon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-400">Basketball</h3>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Category;
