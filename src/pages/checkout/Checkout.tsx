import CartCard from "@/components/card/CartCard";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { resetCart } from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TOrder } from "@/types/FormInterface";
import { Label } from "@radix-ui/react-label";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TOrder>();
  const navigate = useNavigate();
  const cartProducts = useAppSelector((state) => state.cart.items);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();

  const totalPrice = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalPriceWithVat = totalPrice + totalPrice * 0.15;

  const isDisabled = cartProducts.some((product) => {
    return product.stockQuantity < product.quantity;
  });

  const onSubmit: SubmitHandler<TOrder> = async (data) => {
    const order = {
      ...data,
      paymentMethod: "Cash on Delivery",
      orderItems: cartProducts.map((product) => {
        return {
          quantity: product.quantity,
          productId: product.id,
          totalPrice: product.price * product.quantity,
        };
      }),
    };

    console.log(order);

    const res = await createOrder(order).unwrap();

    if (res.success) {
      dispatch(resetCart());
      toast({
        variant: "default",
        description: "Order placed successfully",
      });
      navigate("/order-confirmation");
    }
  };

  return (
    <div className="bg-gray-900 min:h-screen py-24 md:px-0 px-5">
      <Container>
        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-5">
          <div className="md:col-span-2 col-span-1">
            <div>
              <div className="flex flex-col items-center">
                <div className="mb-6 inline-block rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                  Checkout
                </div>
                <h2 className="mb-4 uppercase text-gray-200 text-3xl max-w-2xl text-center font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Enter your details
                </h2>
                <p className="mb-8 max-w-xl text-muted-foreground md:text-lg text-center">
                  Please enter your details to complete the order.
                </p>
              </div>
            </div>

            {/* payment method */}
            <div className="flex gap-2">
              <div className="mb-6 inline-block rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                Payment Method
              </div>
              <h1 className="text-xl font-bold text-gray-200">
                Cash on Delivery
                <MdOutlineDone className="inline-block h-6 w-6 text-green-500" />
              </h1>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="text-gray-200">
                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Enter your email"
                    className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <Label htmlFor="number">Phone Number</Label>
                  <Input
                    id="number"
                    type="string"
                    {...register("number", {
                      required: "Phone number is required",
                    })}
                    placeholder="Enter your number"
                    className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
                  />
                  {errors.number && (
                    <p className="text-red-500">{errors.number.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Textarea
                    id="address"
                    rows={6}
                    {...register("address", {
                      required: "Delivery address is required",
                    })}
                    placeholder="Enter your delivery address"
                    className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
                  />
                  {errors.address && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isDisabled && cartProducts.length < 1}
                  className={` ${
                    isDisabled &&
                    cartProducts.length < 1 &&
                    "cursor-not-allowed bg-red-300 text-gray-400"
                  } w-full bg-red-500 text-white hover:bg-red-600 transition-colors`}
                >
                  {isLoading ? "Placing..." : "Place Order"}
                </Button>
              </form>
            </div>
          </div>

          <div className="col-span-1 bg-gray-700 px-5 py-5 rounded-lg">
            <h1 className="text-4xl font-black text-gray-200">Your order</h1>
            <div className="mt-5 flex flex-col gap-4 text-white">
              {cartProducts.map((product) => (
                <CartCard key={product.id} product={product} />
              ))}
            </div>

            {cartProducts.length > 0 ? (
              <div className="border-t py-4 flex flex-col mt-10 text-white">
                <div className="flex items-center justify-between ">
                  <div>Added: 15% vat</div>
                  <span className="bg-green-500 px-2 py-1 rounded-md font-bold">
                    FREE DELIVERY
                  </span>
                  <div className="flex justify-between items-center gap-2">
                    <p className="font-medium md:text-2xl">Total: </p>
                    <p className="font-medium md:text-2xl">${totalPriceWithVat}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center mt-10">
                <p className="text-gray-400">No items in the cart</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
