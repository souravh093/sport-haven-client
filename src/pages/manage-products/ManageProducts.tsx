import CreateProduct from "@/components/modal/CreateProduct";
import EditProduct from "@/components/modal/EditProduct";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductInterface";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

import { MdDeleteOutline } from "react-icons/md";

const ManageProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const { data: products, isLoading } = useGetAllProductsQuery({ searchTerm });

  const [deleteProduct] = useDeleteProductMutation(undefined);

  const handleDeleteProduct = async (id: string) => {
    const res = await deleteProduct(id).unwrap();

    if (res.success) {
      toast({
        variant: "default",
        description: res?.message,
      });
    }
  };

  return (
    <div className="bg-gray-900 py-8 min-h-[calc(100vh-240px)]">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <div className="relative w-full md:w-auto">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 rounded-md w-full md:w-64 bg-gray-800 text-white border-gray-700"
              />
            </div>
            <CreateProduct />
          </div>
          <div className="py-8">
            <Table className="bg-gray-800 text-white border-gray-700">
              <TableHeader className="bg-gray-700">
                <TableRow>
                  <TableHead className="w-[100px] text-gray-400">NO</TableHead>
                  <TableHead className="text-gray-400">Name</TableHead>
                  <TableHead className="text-gray-400">Price</TableHead>
                  <TableHead className="text-right text-gray-400">
                    Brand
                  </TableHead>
                  <TableHead className="text-right text-gray-400">
                    Category
                  </TableHead>
                  <TableHead className="text-right text-gray-400">
                    Stock
                  </TableHead>
                  <TableHead className="text-right text-gray-400">
                    Ratings
                  </TableHead>
                  <TableHead className="text-right text-gray-400">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full">
                {products?.data?.length < 1 ? (
                  <p className="text-gray-400 px-5 py-2 w-[200px] font-bold flex items-center justify-center">
                    No products found
                  </p>
                ) : isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
                  </div>
                ) : (
                  products?.data?.map(
                    (
                      {
                        _id,
                        name,
                        price,
                        brand,
                        category,
                        stockQuantity,
                        rating,
                        image,
                      }: TProduct,
                      index: number
                    ) => (
                      <TableRow
                        key={index + 1}
                        className="border-t border-gray-700 hover:bg-gray-700"
                      >
                        <TableCell className="font-medium text-gray-300">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-gray-300">
                          <div className="flex items-center gap-4">
                            <img
                              src={image}
                              alt="Product Image"
                              className="w-12 h-12 object-cover rounded-md bg-white"
                            />
                            <span>{name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300">{price}</TableCell>
                        <TableCell className="text-right text-gray-300">
                          {brand}
                        </TableCell>
                        <TableCell className="text-right text-gray-300">
                          {category}
                        </TableCell>
                        <TableCell className="text-right text-gray-300">
                          {stockQuantity}
                        </TableCell>
                        <TableCell className="text-right text-gray-300">
                          {rating}
                        </TableCell>
                        <TableCell className="text-right text-gray-300">
                          <EditProduct id={_id} />
                          <Button
                            onClick={() => handleDeleteProduct(_id)}
                            size="sm"
                            className="bg-red-500"
                          >
                            <MdDeleteOutline />
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  )
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageProducts;
