import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { addItem } from "@/redux/features/cart/cartSlice";
import {
  useGetSingleProductQuery,
  useStoreRatingMutation,
} from "@/redux/features/product/productApi";
import { useAppDispatch } from "@/redux/hook";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: singleProduct, isLoading } = useGetSingleProductQuery(id);
  const [updateRating] = useStoreRatingMutation();
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-opacity-50"></div>
      </div>
    );
  }

  const {
    _id,
    name,
    category,
    brand,
    stockQuantity,
    rating,
    price,
    image,
    description,
  } = singleProduct.data;

  const addToCart = () => {
    const cart = {
      id,
      name,
      price,
      image,
      stockQuantity,
    };

    dispatch(addItem(cart));

    toast({
      variant: "default",
      description: "Product added to cart",
    });
  };

  const getSetRating = async (rate: number) => {
    const res = await updateRating({ id: _id, data: { rating: rate } }).unwrap();
    
    if (res.success) {
      toast({
        variant: "default",
        description: "Rating updated successfully",
      });
    }
  };

  const formatRating = Number(rating.toFixed(1));

  return (
    <div className="bg-gray-900 min-h-[calc(100vh-272px)]">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start  px-4 mx-auto py-6  bg-gray-900">
          <div>
            <img
              src={image}
              alt="Product Image"
              width={800}
              height={600}
              className="w-full rounded-lg overflow-hidden aspect-[4/3] object-cover"
            />
          </div>
          <div className="grid gap-6 md:gap-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-red-500 capitalize px-3 py-1 text-xs font-medium text-primary-foreground">
                  Category: {category}
                </span>
                <span className="inline-block rounded-full bg-red-500 capitalize px-3 py-1 text-xs font-medium text-primary-foreground">
                  Brand: {brand}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {name}
              </h1>
            </div>
            <div className="grid gap-4 text-gray-400">
              <p>{description}</p>
              <div className="flex items-center gap-4">
                <Rating
                  onChange={(rate) => getSetRating(rate)}
                  initialRating={rating}
                  emptySymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
                <span className="text-white">{formatRating}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium text-white">In Stock:</span>
                <span className="text-white">{stockQuantity}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium text-white">Price:</span>
                <span className="text-4xl font-bold text-white">${price}</span>
              </div>
              <Button
                onClick={addToCart}
                size="lg"
                className="w-full bg-red-500 hover:bg-red-600 text-primary-foreground"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
