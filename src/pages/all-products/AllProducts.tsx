import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  SearchIcon,
  ListOrderedIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "lucide-react";

import ProductCard from "@/components/card/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import Container from "@/components/shared/Container";
import { TProduct } from "@/types/ProductInterface";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<{
    category: string[];
    // price: { min: number; max: number };
    brand: string[];
    // rating: number;
  }>({
    category: [],
    // price: { min: 0, max: Infinity },
    brand: [],
    // rating: 0,
  });
  const [sortOrder, setSortOrder] = useState("asc");

  const { data: products } = useGetAllProductsQuery({
    searchTerm,
    sort: sortOrder,
    filters,
  });

  console.log(
    "filters =>",
    filters,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (category: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: prevFilters.category.includes(category)
        ? prevFilters.category.filter((c) => c !== category)
        : [...prevFilters.category, category],
    }));
  };
  
  const handleBrandFilter = (brand: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      brand: prevFilters.brand.includes(brand)
        ? prevFilters.brand.filter((b) => b !== brand)
        : [...prevFilters.brand, brand],
    }));
  };
  
  const handleClearFilters = () => {
    setFilters({
      category: [],
      brand: [],
    });
  };

  //   const handleRatingFilter = (rating: number) => {
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       rating,
  //     }));
  //   };

  const handleSortOrder = (order: string) => {
    setSortOrder(order);
  };


  return (
    <div className=" px-4 md:px-6 py-8 bg-gray-900 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Sports Goods</h1>
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
        </div>
        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          <div className="bg-gray-800 rounded-md shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-base font-medium mb-2">Category</h3>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Running")}
                      onCheckedChange={() => handleCategoryFilter("Running")}
                    />
                    Running
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Lifestyle")}
                      onCheckedChange={() => handleCategoryFilter("Lifestyle")}
                    />
                    Lifestyle
                  </Label>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Price</h3>
                <div />
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Brand</h3>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Adidas")}
                      onCheckedChange={() => handleBrandFilter("Adidas")}
                    />
                    Adidas
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Nike")}
                      onCheckedChange={() => handleBrandFilter("Nike")}
                    />
                    Nike
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Puma")}
                      onCheckedChange={() => handleBrandFilter("Puma")}
                    />
                    Puma
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Asdics")}
                      onCheckedChange={() => handleBrandFilter("Asdics")}
                    />
                    Asdics
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Under Armour")}
                      onCheckedChange={() => handleBrandFilter("Under Armour")}
                    />
                    Under Armour
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Reebok")}
                      onCheckedChange={() => handleBrandFilter("Reebok")}
                    />
                    Reebok
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("New Balance")}
                      onCheckedChange={() => handleBrandFilter("New Balance")}
                    />
                    New Balance
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Saucy")}
                      onCheckedChange={() => handleBrandFilter("Saucy")}
                    />
                    Saucy
                  </Label>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Rating</h3>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <div />4 stars and above
                  </Label>
                  <Label className="flex items-center gap-2">
                    <div />3 stars and above
                  </Label>
                  <Label className="flex items-center gap-2">
                    <div />2 stars and above
                  </Label>
                  <Label className="flex items-center gap-2">
                    <div />1 star and above
                  </Label>
                </div>
              </div>
              <Button
                onClick={handleClearFilters}
                className="bg-gray-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-800 hover:text-gray-400"
                  asChild
                >
                  <Button
                    variant="outline"
                    className="gap-2 border-gray-700 text-white"
                  >
                    <ListOrderedIcon className="w-4 h-4" />
                    Sort by Price
                    {sortOrder === "asc" ? (
                      <ArrowUpIcon className="w-4 h-4" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-gray-800 border-gray-700 text-white "
                >
                  <DropdownMenuRadioGroup
                    value={sortOrder}
                    onValueChange={handleSortOrder}
                    className="hover:bg-gray-800"
                  >
                    <DropdownMenuRadioItem value="asc">
                      Price: Low to High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="desc">
                      Price: High to Low
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products?.data?.map((product: TProduct) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
