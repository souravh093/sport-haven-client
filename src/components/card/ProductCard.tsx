import Rating from "react-rating";
import { Link } from "react-router-dom";
import productImage from "../../assets/slider2.jpg";
import { TProduct } from "@/types/ProductInterface";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { name, category, brand, stockQuantity, rating, price, image } =
    product;
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-800 border-gray-700 border shadow-lg transition-all duration-300 hover:shadow-xl">
      <img
        src={image ? image : productImage}
        alt="Product Image"
        width={400}
        height={300}
        className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-primary px-2 py-1 text-xs font-medium text-gray-400">
            {category}
          </span>
          <span className="rounded-md bg-primary px-2 py-1 text-xs font-medium text-gray-400">
            {brand}
          </span>
          <span className="text-sm font-medium text-gray-400">
            In Stock: {stockQuantity}
          </span>
        </div>
        <h3 className="mt-2 text-lg text-white font-semibold line-clamp-1">
          {name}
        </h3>
        <div className="mt-2 flex items-center space-x-2">
          <Rating
            initialRating={3.5}
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
            readonly
          />
          <span className="text-sm font-medium text-muted-foreground">
            {rating}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-400">${price}</span>
          <Link
            to={`/products/${product.id}`}
            className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
