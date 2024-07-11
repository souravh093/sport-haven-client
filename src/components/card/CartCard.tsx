import {
  CartItem,
  removeItem,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";

import { IoClose } from "react-icons/io5";
import { toast } from "../ui/use-toast";

const CartCard = ({ product }: { product: CartItem }) => {
  const dispatch = useAppDispatch();
  const { id, image, name, price, quantity } = product;
  const handleQuantityIncrease = () => {
    console.log("first", quantity);
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleQuantityDecrease = () => {
    if (quantity === 1) {
      toast({
        variant: "destructive",
        description: "Quantity can't be less than 1",
      });
      return;
    }
    dispatch(updateQuantity({ id, quantity: quantity - 1 }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="border border-gray-600 p-1 rounded-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={image}
          className="w-8 h-8 rounded-md bg-gray-500 object-cover"
          alt="cart product image"
        />
        <h1 className="text-sm">{name}</h1>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={handleQuantityDecrease}
          className="text-xl font-bold hover:text-gray-900 hover:shadow-lg"
        >
          -
        </button>
        <div className="border border-red-500  px-2">{quantity}</div>
        <button
          onClick={handleQuantityIncrease}
          className="text-xl font-bold hover:text-gray-900  hover:shadow-lg"
        >
          +
        </button>
      </div>

      <h1>${price}</h1>
      <h1>${price * quantity}</h1>

      <button
        onClick={handleRemoveItem}
        className="bg-red-500 text-sm text-white p-1 rounded-md"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default CartCard;
