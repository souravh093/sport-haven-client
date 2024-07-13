import ProductCard from "@/components/card/ProductCard";
import Container from "@/components/shared/Container";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductInterface";

const FeatureProduct = () => {
  const { data: products } = useGetAllProductsQuery(
    {
      page: 1,
      limit: 4,
    },
    {
      pollingInterval: 30000,
    }
  );

  return (
    <div className="py-16 bg-gray-950 px-5 md:px-0 ">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-6 pb-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl text-gray-400 font-bold tracking-tight sm:text-4xl uppercase">  
              Featured Sports Gear
            </h2>
            <p className="max-w-md text-muted-foreground">
              Discover the latest and greatest sports equipment to elevate your
              game.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {products?.data?.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeatureProduct;
