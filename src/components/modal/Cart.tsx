import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/redux/hook";
import CartCard from "../card/CartCard";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const cartProducts = useAppSelector((state) => state.cart.items);
  const totalPrice = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalPriceWithVat = totalPrice + totalPrice * 0.15;

  const isDisabled = cartProducts.some((product) => {
    return product.stockQuantity < product.quantity;
  });

  const isOutOfStock = cartProducts.some((product) => {
    return product.stockQuantity === 0;
  });

  return (
    <Sheet>
      <SheetTrigger>
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
            {cartProducts.length}
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-gray-700 border border-gray-800 shadow-lg text-gray-400 w-full mx-auto">
        <SheetTitle className="text-gray-100 border-b-2 ">
          Cart Items
        </SheetTitle>
        <div className="mt-5 flex flex-col gap-4">
          {cartProducts.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>

        {cartProducts.length > 0 ? (
          <div className="border-t py-4 flex flex-col mt-10">
            <div className="flex items-center justify-between">
              <div>Added: 15% vat</div>
              <div className="flex justify-between items-center gap-2">
                <p className="font-medium text-2xl">Total: </p>
                <p className="font-medium text-2xl">${totalPriceWithVat}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button
                disabled={isDisabled || isOutOfStock}
                onClick={() => navigate("/checkout")}
                className={`flex-1 bg-red-500 hover:bg-red-600 cursor-pointer ${
                  isDisabled || (isOutOfStock && "cursor-not-allowed")
                }`}
              >
                Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-gray-400">No items in the cart</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CreateProduct;
